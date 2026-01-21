import { IPost, IUpdatePost } from "../types/index.js";
import * as postRepositories from "../repositories/post.repository.js";

export async function createPost(postData: IPost) {
  await postRepositories.create(postData);
}

export async function getAllPost() {
  return await postRepositories.getAll();
}

export async function getPostById(id: string) {
  return await postRepositories.existById(id);
}

export async function updatePostById(id: string, postData: IUpdatePost) {
  const post = await postRepositories.existById(id);

  if (!post) {
    return null;
  }

  return await postRepositories.update(id, postData);
}
