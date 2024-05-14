import { TRPCError } from '@trpc/server';
import { createApi } from 'unsplash-js';
import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY ?? '',
});

export const unsplashRouter = createTRPCRouter({
  getImages: protectedProcedure
    .input(
      z.object({
        query: z.string().min(5),
      })
    )
    .query(async ({ input: { query } }) => {
      try {
        const data = await unsplash.search.getPhotos({
          query,
          orderBy: 'relevant',
          orientation: 'landscape',
        });
        return data.response;
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'not able to fetch images from unsplash server',
        });
      }
    }),
});
