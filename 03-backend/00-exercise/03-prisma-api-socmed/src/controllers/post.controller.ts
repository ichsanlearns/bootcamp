import { type Request, type Response } from "express";

import {
  createPost,
  getAllPost,
  getPostById,
} from "../services/post.service.js";

export async function newPost(req: Request, res: Response) {
  const postData = req.body;
  await createPost(postData);
  res.status(201).json({ message: "Post Created" });
}

export async function showAllPost(req: Request, res: Response) {
  const allPosts = await getAllPost();

  if (allPosts.length === 0) {
    return res
      .status(200)
      .json({ message: "Saat ini tidak ada post yang sudah dibuat" });
  }

  res.status(200).json({ allPosts });
}

export async function showPostById(req: Request, res: Response) {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid or missing ID" });
  }

  const postById = await getPostById(id);

  if (!postById) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({ postById });
}
