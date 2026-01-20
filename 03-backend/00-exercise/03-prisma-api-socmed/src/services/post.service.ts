import { prisma } from "../lib/prisma.lib.js";
import { IPost, IUpdatePost } from "../types/index.js";

export async function createPost(postData: IPost) {
  await prisma.post.create({
    data: {
      title: postData.title,
      content: postData.content,
      imageUrl: postData.imageUrl ?? null,
      authorId: postData.authorId,
    },
  });
}

export async function getAllPost() {
  return await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
    },
  });
}

export async function getPostById(id: string) {
  return await prisma.post.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
    },
  });
}

export async function updatePostById(id: string, postData: IUpdatePost) {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    return null;
  }

  return await prisma.post.update({
    where: { id },
    data: postData,
  });
}
