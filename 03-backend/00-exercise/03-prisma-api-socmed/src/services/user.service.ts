import { prisma } from "../lib/prisma.lib.js";
import { IUpdateUserData, IUserData } from "../types/index.js";

export async function getAll() {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

export async function getById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

export async function updateUserById(id: string, userData: IUpdateUserData) {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return null;
  }

  return await prisma.user.update({
    where: { id },
    data: userData,
  });
}

export async function getUserPost(id: string) {
  return await prisma.post.findMany({
    where: { authorId: id },
    select: { title: true, content: true, imageUrl: true, authorId: true },
  });
}
