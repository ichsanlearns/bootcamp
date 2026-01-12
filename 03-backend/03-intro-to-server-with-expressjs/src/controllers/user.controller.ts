import { type Request, type Response } from "express";

import { readFile, writeFile } from "../utils/io.util.ts";
import type { IUser } from "../types/user.type.ts";

// GET ALL USER
export async function getAllUsers(request: Request, response: Response) {
  const userData = await readFile("data/users.json");

  response.status(200).json(userData);
}

// GET SINGLE USER BY ID
export async function getUserById(request: Request, response: Response) {
  const id = Number(request.params.id);
  const userData = (await readFile("data/users.json")) as IUser[];
  const filteredUserData = userData.filter((user) => user.id === id);

  if (filteredUserData.length <= 0) {
    return response
      .status(404)
      .json({ message: `user data with id: ${id}, is not found` });
  }

  response.status(200).json({ filteredUserData });
}

// CREATE USER
export async function createUser(request: Request, response: Response) {
  const body = request.body;
  const userData = (await readFile("data/users.json")) as IUser[];

  if (!body) {
    return response.status(400).json({ message: "User data is missing" });
  }

  const newUserData: IUser = {
    id:
      userData.length > 0
        ? Math.max(...userData.map((user) => user.id)) + 1
        : 1,
    fullName: body.fullName,
    age: body.age,
    gender: body.gender,
    isVerified: false,
    createdAt: new Date(),
    updatedAt: null,
  };

  const latestUserData = [...userData, newUserData];
  await writeFile("data/users.json", latestUserData);

  response.status(201).json({
    message: "Successfully created new user data",
    data: newUserData,
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
