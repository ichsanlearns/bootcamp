import { prisma } from "../lib/prisma.lib.js";
import { IUserData } from "../types/index.js";

export const create = (data: IUserData) => {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
};
