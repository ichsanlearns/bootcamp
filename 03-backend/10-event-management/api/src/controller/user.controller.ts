import { type Request, type Response } from "express";
import {
  getAll,
  getById,
  hardDeleteAll,
  hardDeleteById,
  softDeleteAll,
  softDeleteById,
  update,
} from "../services/user.service.js";
import { redis } from "../lib/redis.js";

export async function getAllUsers(req: Request, res: Response) {
  const cachedUser = await redis.get("userData");

  if (cachedUser) {
    return res.status(200).json({
      message: `User fetched from catched`,
      data: JSON.parse(cachedUser),
    });
  }

  const allUsersData = await getAll(req.query);

  await redis.set("userData", JSON.stringify(allUsersData), "EX", 60 * 5);

  res.status(200).json({ message: "User fetched from DB", data: allUsersData });
}

export async function getUserById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const role = "CUSTOMER";

  const userData = await getById(id, role);

  res.status(200).json(userData);
}

export async function updateUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { name, email, password } = req.body;

    const updatedUser = await update(id, { name, email, password });

    await redis.del("userData");

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function softDeleteUserById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const deletedUser = await softDeleteById(id);

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function hardDeleteUserById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const deletedUser = await hardDeleteById(id);

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function softDeleteAllUser(req: Request, res: Response) {
  try {
    const deletedUser = await softDeleteAll();

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function hardDeleteAllUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const deletedUser = await hardDeleteAll();

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
}
