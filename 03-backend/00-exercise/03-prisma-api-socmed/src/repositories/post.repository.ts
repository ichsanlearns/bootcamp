import { prisma } from "../lib/prisma.lib.js";
import { IPost, IUpdatePost } from "../types/index.js";

export const create = (postData: IPost) => {
  return prisma.post.create({
    data: {
      title: postData.title,
      content: postData.content,
      imageUrl: postData.imageUrl ?? null,
      authorId: postData.authorId,
    },
  });
};

export const update = (id: string, postData: IUpdatePost) => {
  return prisma.post.update({
    where: { id },
    data: postData,
  });
};

export const getAll = () => {
  return prisma.post.findMany();
};

export const existById = (id: string) => {
  return prisma.post.findUnique({
    where: { id },
  });
};

export const increaseCommentCount = (postId: string) => {
  return prisma.post.update({
    where: { id: postId },
    data: { total_comment: { increment: 1 } },
  });
};

export const existEmailsById = (postId: string) => {
  return prisma.post.findUnique({
    where: { id: postId },
    select: { id: true },
  });
};

export const userPosts = (id: string) => {
  return prisma.post.findMany({
    where: { authorId: id },
  });
};
