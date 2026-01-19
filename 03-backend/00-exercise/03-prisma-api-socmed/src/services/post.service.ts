import { prisma } from "../lib/prisma.lib.js";
import { IPost } from "../types/index.js";

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
      authorId: true,
      title: true,
      content: true,
      imageUrl: true,
    },
  });
}

export async function getPostById(id: string) {
  return await prisma.post.findUnique({
    where: { id },
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
    },
  });
}
