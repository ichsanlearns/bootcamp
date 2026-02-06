import type { Request, Response } from "express";
import {
  createArrayImages,
  createFieldsImages,
  createSingleImage,
} from "../services/image.service.js";

export async function postSingleImage(req: Request, res: Response) {
  const file = req.file as Express.Multer.File;

  const fileResult = await createSingleImage(file);

  res.status(201).json({ message: "Single image uploaded", data: fileResult });
}

export async function postArrayImages(req: Request, res: Response) {
  const files = req.files as Express.Multer.File[];

  const filesResult = await createArrayImages(files);

  res
    .status(201)
    .json({ message: "Multiple array of images uploaded", data: filesResult });
}

export async function postFieldsImages(req: Request, res: Response) {
  const files = req.files as Record<string, Express.Multer.File[]>;

  const filesResult = await createFieldsImages(files);

  res
    .status(201)
    .json({ message: "Field of images uploaded", data: filesResult });
}
