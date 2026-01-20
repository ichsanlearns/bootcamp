import { type Request, type Response } from "express";

import { create, get } from "../services/auth.service.js";

export async function register(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await create({ name, email, password });

    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const user = await get(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.status(200).json({ message: "Login success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
