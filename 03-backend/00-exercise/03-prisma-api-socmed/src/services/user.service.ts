import { prisma } from "../lib/prisma.lib.js";
import { IUserData } from "../types/index.js";

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

export async function updateUserById(id: string, userData: IUserData) {
  const data: Partial<IUserData> = {};
  if (userData.name !== undefined) data.name = userData.name;
  if (userData.email !== undefined) data.email = userData.email;
  if (userData.password !== undefined) data.password = userData.password;

  await prisma.user.update({
    where: { id },
    data: data,
  });
}

export async function getUserPost(id: string) {
  return await prisma.post.findMany({
    where: { authorId: id },
    select: { title: true, content: true, imageUrl: true, authorId: true },
  });
}
