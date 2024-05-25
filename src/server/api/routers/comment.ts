import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc';

export const commentRouter = createTRPCRouter({
  createComment: publicProcedure
    .input(
      z.object({
        text: z.string().min(3),
        postId: z.string(),
        name: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { db } = ctx;

      await db.comment.create({
        data: {
          text: input.text,
          postId: input.postId,
          name: input.name,
          email: input.email,
          isApproved: false, // default to false
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
          isApproved: true, // only fetch approved comments
        },
      });

      return comments;
    }),
  approveComment: protectedProcedure
    .input(
      z.object({
        commentId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { db } = ctx;

      await db.comment.update({
        where: {
          id: input.commentId,
        },
        data: {
          isApproved: true,
        },
      });
    }),
  deleteComment: protectedProcedure
    .input(
      z.object({
        commentId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { db } = ctx;

      await db.comment.delete({
        where: {
          id: input.commentId,
        },
      });
    }),
});
