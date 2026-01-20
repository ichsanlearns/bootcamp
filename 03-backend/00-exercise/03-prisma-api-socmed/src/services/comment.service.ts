import { prisma } from "../lib/prisma.lib.js";

export async function create(message: string, postId: string, userId: string) {
  await prisma.$transaction([
    prisma.commentPost.create({
      data: {
        message: message,
        post_id: postId,
        author_id: userId,
      },
    }),
    prisma.post.update({
      where: { id: postId },
      data: { total_comment: { increment: 1 } },
    }),
  ]);
}
