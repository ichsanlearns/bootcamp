import { prisma } from "../lib/prisma.lib.js";

export const createComment = (data: {
  message: string;
  postId: string;
  userId: string;
}) => {
  return prisma.commentPost.create({
    data: {
      message: data.message,
      post_id: data.postId,
      author_id: data.userId,
    },
  });
};
