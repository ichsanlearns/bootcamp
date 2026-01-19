import { prisma } from "../lib/prisma.lib.js";

interface IUserData {
  name: string;
  email: string;
  password: string;
}

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
