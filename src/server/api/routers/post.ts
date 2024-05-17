import { TRPCError } from '@trpc/server';
import slugify from 'slugify';
import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc';

const LIMIT = 10;

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  createPost: protectedProcedure
    .input(
      z
        .object({
          title: z.string().min(20).max(40),
          description: z.string().min(95).max(200),
          text: z.string().min(80),
        })
        .and(
          z.object({
            tagIds: z.array(z.object({ id: z.string() })).optional(),
          })
        )
    )
    .mutation(async ({ input, ctx }) => {
      const { session, db } = ctx;
      const { user } = session;

      const existingPost = await db.post.findUnique({
        where: {
          title: input.title,
        },
      });

      if (existingPost) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'post with this title already exists!',
        });
      }

      await db.post.create({
        data: {
          title: input.title,
          slug: slugify(input.title),
          description: input.description,
          authorId: user.id,
          text: input.text,
          html: input.text,
          isPublished: false,
          tags: {
            connect: input.tagIds,
          },
        },
      });
    }),
  getPosts: publicProcedure
    .input(
      z.object({
        userId: z.string().optional(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input: { userId, cursor } }) => {
      const { db } = ctx;

      const posts = await db.post.findMany({
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
        orderBy: {
          createdAt: 'desc',
        },
        take: LIMIT + 1,
        cursor: cursor ? { id: cursor } : undefined,
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (posts.length > LIMIT) {
        const nextItem = posts.pop();
        if (nextItem) nextCursor = nextItem.id;
      }

      return { posts, nextCursor: nextCursor };
    }),
  getPostsByTag: publicProcedure
    .input(
      z.object({
        tagId: z.string(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input: { tagId, cursor } }) => {
      const { db } = ctx;

      const posts = await db.post.findMany({
        where: {
          tags: {
            some: {
              id: tagId,
            },
          },
        },
        select: {
          title: true,
          description: true,
          slug: true,
          featuredImage: true,
          createdAt: true,
          tags: true,
          id: true,
          author: {
            select: {
              name: true,
              image: true,
              username: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
        take: LIMIT + 1,
        cursor: cursor ? { id: cursor } : undefined,
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (posts.length > LIMIT) {
        const nextItem = posts.pop();
        if (nextItem) nextCursor = nextItem.id;
      }

      return { posts, nextCursor: nextCursor };
    }),
  getPost: publicProcedure
    .input(
      z.object({
        slug: z.string(),
        userId: z.string().optional(),
      })
    )
    .query(async ({ input: { slug, userId }, ctx: { db } }) => {
      const post = await db.post.findFirst({
        where: {
          slug,
        },
        select: {
          title: true,
          description: true,
          tags: true,
          id: true,
          featuredImage: true,
          html: true,
          slug: true,
          text: true,
          authorId: true,
          createdAt: true,
          updatedAt: true,
          isPublished: true,
          bookmarks: userId
            ? {
                where: {
                  userId,
                },
              }
            : false,
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
              likes: true,
              comments: true,
              tags: true,
            },
          },
        },
      });

      return post;
    }),

  getLatestPosts: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx;
    const latestPosts = await db.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
      select: {
        title: true,
        featuredImage: true,
        id: true,
        slug: true, // Include slug for linking purposes
      },
    });
    return latestPosts;
  }),

  getArticlesBySearch: publicProcedure
    .input(
      z.object({
        keyword: z.string().optional(),
        cursor: z.string().nullish(),
        limit: z.number().optional().default(6),
      })
    )
    .query(async ({ input, ctx }) => {
      const { db } = ctx;
      const { keyword, cursor, limit } = input;

      let posts;

      if (keyword) {
        posts = await db.post.findMany({
          where: {
            OR: [
              { title: { contains: keyword, mode: 'insensitive' } },
              {
                tags: {
                  some: {
                    name: {
                      contains: keyword,
                      mode: 'insensitive',
                    },
                  },
                },
              },
            ],
          },
          take: limit + 1,
          cursor: cursor ? { id: cursor } : undefined,
          orderBy: { createdAt: 'asc' },
          select: {
            id: true,
            description: true,
            title: true,
            featuredImage: true,
            slug: true,
          },
        });
      } else {
        posts = await db.post.findMany({
          orderBy: {
            createdAt: 'asc',
          },
          select: {
            title: true,
            id: true,
            description: true,
            featuredImage: true,
            slug: true,
          },
        });
      }

      let nextCursor: string | undefined = undefined;
      if (posts.length > limit) {
        const nextItem = posts.pop();
        nextCursor = nextItem?.id;
      }

      return {
        posts,
        nextCursor,
      };
    }),

  updatePost: protectedProcedure
    .input(
      z
        .object({
          title: z.string().min(20).max(40),
          description: z.string().min(95).max(200),
          text: z.string().min(80),
        })
        .partial()
        .and(
          z
            .object({ isPublished: z.boolean(), featuredImage: z.string() })
            .partial()
        )
        .and(
          z.object({
            postId: z.string(),
          })
        )
    )
    .mutation(async ({ ctx: { db }, input: { postId, ...data } }) => {
      await db.post.update({
        where: {
          id: postId,
        },
        data: {
          ...data,
        },
      });
    }),

  bookmarkPost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { db, session }, input: { postId } }) => {
      await db.bookmark.create({
        data: {
          postId,
          userId: session.user.id,
        },
      });
    }),
  removeBookmark: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { db, session }, input: { postId } }) => {
      await db.bookmark.delete({
        where: {
          userId_postId: {
            postId,
            userId: session.user.id,
          },
        },
      });
    }),
  likePost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { db, session }, input: { postId } }) => {
      await db.like.create({
        data: {
          postId,
          userId: session.user.id,
        },
      });
    }),
  dislikePost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { db, session }, input: { postId } }) => {
      await db.like.delete({
        where: {
          userId_postId: {
            postId,
            userId: session.user.id,
          },
        },
      });
    }),

  deletePost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { postId } }) => {
      const { db } = ctx;

      // Check if the post exists
      const existingPost = await db.post.findUnique({
        where: {
          id: postId,
        },
      });

      if (!existingPost) {
        throw new Error('Post not found');
      }

      // Delete the post
      await db.post.delete({
        where: {
          id: postId,
        },
      });

      return { success: true };
    }),
});
