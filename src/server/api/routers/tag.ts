import { TRPCError } from '@trpc/server';
import slugify from 'slugify';
import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc';

export const tagRouter = createTRPCRouter({
  createTag: protectedProcedure
    .input(
      z.object({
        name: z.string().min(3).max(20),
        description: z.string().min(10).max(400),
      })
    )
    .mutation(async ({ ctx: { db }, input: { name, description } }) => {
      const slug = slugify(name);

      const existingTag = await db.tag.findUnique({
        where: {
          name: name,
        },
      });

      if (existingTag) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'tag name already exists!',
        });
      }

      await db.tag.create({
        data: {
          name,
          description,
          slug,
        },
      });
    }),
  getTags: publicProcedure.query(async ({ ctx: { db } }) => {
    return await db.tag.findMany();
  }),
});
