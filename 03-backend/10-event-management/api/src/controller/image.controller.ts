import type { Request, Response } from "express";
import {
  uploadArrayService,
  uploadSingleService,
} from "../services/image.service.js";

export async function uploadSingleController(req: Request, res: Response) {
  const file = req.file as Express.Multer.File;

  const fileResult = await uploadSingleService(file);

  res.status(201).json({ message: "Single image uploaded", fileResult });
}

export async function uploadArrayController(req: Request, res: Response) {
  const files = req.files as Express.Multer.File[];

  const filesResult = await uploadArrayService(files);

  res
    .status(201)
    .json({ message: "Multiple array of images uploaded", filesResult });
}
