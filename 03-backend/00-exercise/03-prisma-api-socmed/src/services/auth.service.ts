import { prisma } from "../lib/prisma.lib.js";
import { IUserData } from "../types/index.js";

export async function create(userData: IUserData) {
  await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
  });
}

export async function get(userData: IUserData) {
  return await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });
}
