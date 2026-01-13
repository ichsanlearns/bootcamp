import { type Request, type Response } from "express";

import db from "../configs/db.config.ts";

import { readFile, writeFile } from "../utils/io.util.ts";
import type { IUser } from "../types/user.type.ts";

// GET ALL USER
export async function getAllUsers(request: Request, response: Response) {
  const userData = await db.query(`SELECT * FROM users`);

  response.status(200).json(userData.rows);
}

// GET SINGLE USER BY ID
export async function getUserById(request: Request, response: Response) {
  const id = Number(request.params.id);

  const filteredUserData = await db.query(`SELECT * FROM users WHERE id = $1`, [
    id,
  ]);

  response.status(200).json({ data: filteredUserData.rows[0] });
}

// CREATE USER
export async function createUser(request: Request, response: Response) {
  const body = request.body;

  if (!body) {
    return response.status(400).json({ message: "User data is missing" });
  }

  const newUserData = await db.query(
    `
    INSERT INTO users (full_name, email)
    VALUES($1, $2)
    RETURNING *
    `,
    [body.full_name, body.email]
  );

  response.status(201).json({
    message: "Successfully created new user data",
    data: newUserData.rows,
  });
}

// UPDATE USER
export async function updateUser(request: Request, response: Response) {
  const id = Number(request.params.id);
  const body = request.body;
  const userData = (await readFile("data/users.json")) as IUser[];

  const index = userData.findIndex((user) => user.id === id);

  if (index === -1) {
    return response
      .status(404)
      .json({ message: `user data with id: ${id}, is not found` });
  }

  const updatedUserData: IUser = {
    ...(userData[index] as IUser),
    fullName: body.fullName ?? userData[index]?.fullName,
    age: body.age ?? userData[index]?.age,
    gender: body.gender ?? userData[index]?.gender,
    updatedAt: new Date(),
  };

  userData[index] = updatedUserData;

  await writeFile("data/users.json", userData);

  response
    .status(200)
    .json({ message: "User updated successfully", data: updatedUserData });
}

// REMOVE ALL
export async function removeAll(request: Request, response: Response) {
  await writeFile("data/users.json", []);

  response.status(200).json({ message: "All users deleted successfully" });
}

// REMOVE USER BY ID
export async function removeUserById(request: Request, response: Response) {
  const id = Number(request.params.id);
  const userData = (await readFile("data/users.json")) as IUser[];
  const filteredData = userData.filter((user) => user.id !== id);

  await writeFile("data/users.json", filteredData);

  response
    .status(200)
    .json({ message: `user with id: ${id} deleted successfully` });
}
