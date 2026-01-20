import { prisma } from "../lib/prisma.lib.js";

export const existsById = (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });
};
