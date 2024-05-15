import { authRouter } from '@/server/api/routers/auth';
import { commentRouter } from '@/server/api/routers/comment';
import { postRouter } from '@/server/api/routers/post';
import { suggestionsRouter } from '@/server/api/routers/suggestions';
import { tagRouter } from '@/server/api/routers/tag';
import { unsplashRouter } from '@/server/api/routers/unsplash';
import { userRouter } from '@/server/api/routers/user';
import { createCallerFactory, createTRPCRouter } from '@/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  unsplash: unsplashRouter,
  tag: tagRouter,
  user: userRouter,
  comment: commentRouter,
  suggestions: suggestionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
