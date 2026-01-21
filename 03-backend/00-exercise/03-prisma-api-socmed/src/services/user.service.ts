import { IUpdateUserData, IUserData } from "../types/index.js";
import * as userRepositories from "../repositories/user.repository.js";
import { userPosts } from "../repositories/post.repository.js";

export async function getAll() {
  return await userRepositories.getAll();
}

export async function getById(id: string) {
  return await userRepositories.existsById(id);
}

export async function updateUserById(id: string, userData: IUpdateUserData) {
  const user = await userRepositories.existsById(id);

  if (!user) {
    return null;
  }

  return await userRepositories.update(id, userData);
}

export async function getUserPost(id: string) {
  return await userPosts(id);
}
