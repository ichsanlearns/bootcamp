import { type Request, type Response } from "express";

import { create, get } from "../services/auth.service.js";

export async function register(req: Request, res: Response) {
  const userData = req.body;
  await create(userData);
  res.status(201).json({ message: "User Created" });
}

export async function login(req: Request, res: Response) {
  const userData = req.body;
  const loginTest = await get(userData);

  console.info(loginTest);
  loginTest?.password === userData.password
    ? res.status(200).json({ message: "Login Success" })
    : res.status(400).json({ message: "Salah Password" });
}
