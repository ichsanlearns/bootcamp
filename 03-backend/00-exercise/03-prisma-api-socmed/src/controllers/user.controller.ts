import { type Request, type Response } from "express";
import {
  getAll,
  getById,
  getUserPost,
  updateUserById,
} from "../services/user.service.js";

export async function allUsers(req: Request, res: Response) {
  try {
    const allUsers = await getAll();
    res.status(200).json({ allUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }

    const userById = await getById(id);

    if (!userById) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      Data: {
        nama: userById.name,
        email: userById.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function showUserPost(req: Request, res: Response) {
  try {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }

    const userPostById = await getUserPost(id);

    if (userPostById.length === 0) {
      return res.status(404).json({ message: "User post not found" });
    }

    res.status(200).json({ userPostById });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function changeUserById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const userDataUpdate = req.body;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }

    const updatedUser = await updateUserById(id, userDataUpdate);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
