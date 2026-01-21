import { prisma } from "../lib/prisma.lib.js";
import { IUpdateUserData } from "../types/index.js";

export const getAll = () => {
  return prisma.user.findMany({
    omit: { password: true },
  });
};

export const update = (id: string, userData: IUpdateUserData) => {
  return prisma.user.update({
    where: { id },
    data: userData,
  });
};

export const existsById = (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
    omit: { password: true },
  });
};

export const existsByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: { email: email },
  });
};
