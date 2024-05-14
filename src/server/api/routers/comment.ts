import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc';

export const commentRouter = createTRPCRouter({
  createComment: protectedProcedure
    .input(
      z.object({
        text: z.string().min(3),
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { db, session }, input }) => {
      await db.comment.create({
        data: {
          ...input,
          userId: session.user.id,
        },
      });
    }),
  getComments: publicProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .query(async ({ ctx: { db }, input: { postId } }) => {
      const comments = await db.comment.findMany({
        where: {
          postId,
        },
        include: {
          user: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      });

      return comments;
    }),
});
