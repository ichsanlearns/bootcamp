import { prisma } from "../lib/prisma.lib.js";

export async function getAll() {
  return await prisma.user.findMany({
    select: {
      name: true,
      email: true,
    },
  });
}

export async function getById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      name: true,
      email: true,
    },
  });
}
