import { IUserData } from "../types/index.js";
import * as authRepositories from "../repositories/auth.repository.js";
import * as userRepositories from "../repositories/user.repository.js";

export async function create(data: IUserData) {
  const existingUser = await userRepositories.existsByEmail(data.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const user = await authRepositories.create(data);

  return user;
}

export async function get(email: string) {
  return await userRepositories.existsByEmail(email);
}
