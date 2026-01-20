import { prisma } from "../lib/prisma.lib.js";
import { CreateUserInput, IUserData } from "../types/index.js";

export async function create(data: CreateUserInput) {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  return user;
}

export async function get(email: string) {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}
