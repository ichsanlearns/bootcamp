import { prisma } from "../lib/prisma.lib.js";

export const increaseCommentCount = (postId: string) => {
  return prisma.post.update({
    where: { id: postId },
    data: { total_comment: { increment: 1 } },
  });
};

export const existsById = (postId: string) => {
  return prisma.post.findUnique({
    where: { id: postId },
    select: { id: true },
  });
};
