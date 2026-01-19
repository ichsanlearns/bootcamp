import { type Request, type Response } from "express";
import { getAll, getById } from "../services/users.service.js";

export async function allUsers(req: Request, res: Response) {
  const allUsers = await getAll();
  res.status(200).json({ allUsers });
}

export async function getUserById(req: Request, res: Response) {
  const id = req.params.id;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid or missing ID" });
  }

  const userById = await getById(id);

  if (!userById) {
    return res.status(404).json({ message: "User not found" });
  }

  res
    .status(200)
    .json({ Data: { nama: userById.name, email: userById.email } });
}
