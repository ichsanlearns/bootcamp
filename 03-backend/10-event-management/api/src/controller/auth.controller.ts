import { type Request, type Response } from "express";

import { assertUser, create } from "../services/user.service.js";
import { comparePassword, hashPassword } from "../services/auth.service.js";
import { generateAccessToken } from "../services/token.service.js";

export async function register(req: Request, res: Response) {
  const { name, email, password, role } = req.body;

  const existingUser = await assertUser({ email });

  if (existingUser) {
    res.status(400).json({ message: "email already used" });
  }

  const hashedPassword = await hashPassword(password);

  const user = await create({ name, email, role, password: hashedPassword });

  res.status(201).json({ message: "User created", user });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await assertUser({ email });

  const isValid = await comparePassword(password, user.password);

  if (!isValid) {
    res.status(400).json({ message: "Invalid credentials" });
  }

  const accessToken = await generateAccessToken(user);

  res.status(200).json({ message: "Logged in", accessToken });
}

export async function logout() {}

export async function forgetPassword() {}
