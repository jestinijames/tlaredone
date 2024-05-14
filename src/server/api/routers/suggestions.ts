/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

export const suggestionsRouter = createTRPCRouter({
  getSuggestions: protectedProcedure.query(async ({ ctx: { db, session } }) => {
    // get user likes and bookmarks -> extract tags -> find people who liked or bookmarked thaose tags posts

    const likes = await db.like.findMany({
      where: {
        userId: session.user.id,
      },
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        post: {
          select: {
            tags: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const bookmarks = await db.bookmark.findMany({
      where: {
        userId: session.user.id,
      },
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        post: {
          select: {
            tags: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    const interestedTags: string[] = [];

    likes.forEach((like: { post: { tags: any[] } }) =>
      interestedTags.push(...like.post.tags.map((l) => l.name))
    );
    bookmarks.forEach((bookmark: { post: { tags: any[] } }) =>
      interestedTags.push(...bookmark.post.tags.map((b) => b.name))
    );

    const suggestions = await db.user.findMany({
      where: {
        OR: [
          {
            likes: {
              some: {
                post: {
                  tags: {
                    some: {
                      name: {
                        in: interestedTags,
                      },
                    },
                  },
                },
              },
            },
          },
          {
            bookmarks: {
              some: {
                post: {
                  tags: {
                    some: {
                      name: {
                        in: interestedTags,
                      },
                    },
                  },
                },
              },
            },
          },
        ],
        NOT: {
          id: session.user.id,
        },
      },
      select: {
        image: true,
        name: true,
        username: true,
        id: true,
      },
      take: 5,
    });

    return suggestions;
  }),
});
