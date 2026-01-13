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

  const updatedUserData = await db.query(
    `
    UPDATE users 
    SET 
      full_name = COALESCE($1, full_name),
      email = COALESCE($2, email)
    WHERE id = $3
    RETURNING *
    `,
    [body.full_name, body.email, id]
  );

  if (updatedUserData.rowCount === 0) {
    return response
      .status(404)
      .json({ message: `User with id: ${id} not found` });
  }

  response.status(200).json({
    message: "User updated successfully",
    data: updatedUserData.rows[0],
  });
}

// REMOVE ALL
export async function removeAll(request: Request, response: Response) {
  await db.query(`DELETE FROM users`);

  response.status(200).json({ message: "All users deleted successfully" });
}

// REMOVE USER BY ID
export async function removeUserById(request: Request, response: Response) {
  const id = Number(request.params.id);

  const deletedUserData = await db.query(
    `DELETE FROM users WHERE id = $1 RETURNING *`,
    [id]
  );

  if (deletedUserData.rowCount === 0) {
    return response
      .status(404)
      .json({ message: `User with id: ${id} not found` });
  }

  response
    .status(200)
    .json({ message: `user with id: ${id} deleted successfully` });
}
