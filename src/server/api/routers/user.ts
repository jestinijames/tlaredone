import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';
import mime from 'mime-types';
import isDataURI from 'validator/lib/isDataURI';
import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc';

const supabaseURL = process.env.SUPABASE_URL ?? '';
const supaBaseSecre = process.env.SUPABASE_SECRET_KEY ?? '';
const supabase = createClient(supabaseURL, supaBaseSecre);

export const userRouter = createTRPCRouter({
  cuploadAvatar: protectedProcedure
    .input(
      z.object({
        imageBase64DataURI: z
          .string()
          .refine(
            (val) => isDataURI(val),
            'image should be in data uri format'
          ),
        mimetype: z.string(),
      })
    )
    .mutation(
      async ({
        ctx: { db, session },
        input: { imageBase64DataURI, mimetype },
      }) => {
        // `image` here is a base64 encoded data URI, it is NOT a base64 string, so we need to extract
        // the real base64 string from it.
        // Check the syntax here: https://en.wikipedia.org/wiki/Data_URI_scheme#Syntax
        const imageBase64Str = imageBase64DataURI.replace(/^.+,/, '');

        const buf = Buffer.from(imageBase64Str, 'base64');

        const { data: previousImageData } = await supabase.storage
          .from('images')
          .list('avatars', {
            search: session.user.name ?? '',
          });

        if (previousImageData)
          await supabase.storage
            .from('images')
            .remove(previousImageData?.map((data) => `avatars/${data.name}`));

        const { data: uploadedImage, error } = await supabase.storage
          .from('images')
          .upload(
            `avatars/${session.user.name}-${randomUUID()}.${mime.extension(
              mimetype
            )}`,
            buf,
            {
              cacheControl: '3600',
              upsert: true,
              contentType: mimetype,
            }
          );

        if (!error) {
          const {
            data: { publicUrl },
          } = supabase.storage.from('images').getPublicUrl(uploadedImage.path);

          await db.user.update({
            where: {
              id: session.user.id,
            },
            data: {
              image: publicUrl,
            },
          });
        }
      }
    ),
  getCurrentUser: protectedProcedure.query(async ({ ctx: { session, db } }) => {
    return await db.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        email: true,
        username: true,
        image: true,
        id: true,
        name: true,
      },
    });
  }),
  getUserProfile: publicProcedure
    .input(
      z.object({
        username: z.string(),
      })
    )
    .query(async ({ ctx: { db }, input: { username } }) => {
      return await db.user.findUnique({
        where: {
          username,
        },
        select: {
          name: true,
          username: true,
          image: true,
          _count: {
            select: {
              followers: true,
              followings: true,
              posts: true,
            },
          },
          id: true,
        },
      });
    }),
  getUserReadingList: protectedProcedure.query(
    async ({ ctx: { db, session } }) => {
      const userReadingList = await db.bookmark.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 4,
        include: {
          post: {
            select: {
              featuredImage: true,
              title: true,
              description: true,
              slug: true,
              author: {
                select: {
                  image: true,
                  name: true,
                },
              },
              createdAt: true,
            },
          },
        },
      });

      return userReadingList;
    }
  ),
  getUserPosts: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input: { userId }, ctx: { db } }) => {
      const userPosts = await db.post.findMany({
        where: {
          authorId: userId,
        },
        select: {
          title: true,
          description: true,
          slug: true,
          featuredImage: true,
          createdAt: true,
          tags: true,
          id: true,
          bookmarks: userId
            ? {
                where: {
                  userId,
                },
              }
            : false,
          author: {
            select: {
              name: true,
              image: true,
              username: true,
            },
          },
          likes: userId
            ? {
                where: {
                  userId,
                },
              }
            : false,
          _count: {
            select: {
              bookmarks: true,
              comments: true,
              likes: true,
            },
          },
        },
      });

      return userPosts;
    }),
});
