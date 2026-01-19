import { type Request, type Response } from "express";

import { create } from "../services/auth.service.js";

export async function register(req: Request, res: Response) {
  const userData = req.body;
  await create(userData);
  res.status(201).json({ message: "User created" });
}

export async function login() {}

export async function logout() {}

export async function forgetPassword() {}
