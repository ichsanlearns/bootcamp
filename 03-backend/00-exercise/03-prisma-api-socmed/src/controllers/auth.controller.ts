import { type Request, type Response } from "express";

import { create, get } from "../services/auth.service.js";
import { catchAsync } from "../utils/catchAsync.util.js";
import { AppError } from "../utils/error.util.js";

export const register = catchAsync(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    // return res.status(400).json({ message: "Missing required fields" });
    throw new AppError("Missing required Fields", 400);
  }

  await create({ name, email, password });

  res.status(201).json({ message: "User created" });
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // return res.status(400).json({ message: "Missing email or password" });
    throw new AppError("Missing email or password", 400);
  }

  const user = await get(email);

  if (!user) {
    // return res.status(404).json({ message: "User not found" });
    throw new AppError("User not found", 404);
  }

  if (user.password !== password) {
    // return res.status(400).json({ message: "Wrong password" });
    throw new AppError("Invalid email or password", 400);
  }

  res.status(200).json({ message: "Login success" });
});
