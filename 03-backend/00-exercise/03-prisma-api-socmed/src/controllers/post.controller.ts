import { type Request, type Response } from "express";

import {
  createPost,
  getAllPost,
  getPostById,
  updatePostById,
} from "../services/post.service.js";

export async function newPost(req: Request, res: Response) {
  try {
    const postData = req.body;

    if (!postData?.title || !postData?.content) {
      return res.status(400).json({ message: "Missing post data" });
    }

    await createPost(postData);

    res.status(201).json({ message: "Post Created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function showAllPost(req: Request, res: Response) {
  try {
    const allPosts = await getAllPost();

    if (allPosts.length === 0) {
      return res
        .status(200)
        .json({ message: "Saat ini tidak ada post yang sudah dibuat" });
    }

    res.status(200).json({ allPosts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function showPostById(req: Request, res: Response) {
  try {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }

    const postById = await getPostById(id);

    if (!postById) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ postById });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function changePostById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const postDataUpdate = req.body;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }

    const updatedPost = await updatePostById(id, postDataUpdate);

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
