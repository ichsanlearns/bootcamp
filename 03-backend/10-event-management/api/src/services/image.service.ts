import {
  uploadArrayUtil,
  uploadFieldsUtil,
  uploadSingleUtil,
} from "../utils/upload.util.js";
import { prisma } from "../lib/prisma.lib.js";

import { AppError } from "../utils/app-error.util.js";

/**
 * Input: Express.Multer.File
 * Output: Image record from DB
 */
export async function createSingleImage(file: Express.Multer.File) {
  try {
    if (!file) throw new AppError(400, "No file provided");
    if (!file.mimetype.startsWith("image/"))
      throw new AppError(400, "Only image files allowed");

    // upload file ke cloudinary untuk mendapatkan url
    const uploadResult = await uploadSingleUtil(file.path);

    // save url ke database lewat prisma(prisma.image.create)
    const imageResult = await prisma.image.create({
      data: { url: uploadResult.secure_url },
    });

    return imageResult;
  } catch (error) {
    throw error;
  }
}

/**
 * Input: Express.Multer.File[]
 * Output: Output batch payload
 */

export async function createArrayImages(files: Express.Multer.File[]) {
  try {
    if (!files) {
      throw new AppError(400, "No files provided");
    }

    const uploadResult = await uploadArrayUtil(files.map((file) => file.path));
    const imageResult = await prisma.image.createMany({
      data: uploadResult.map((result) => ({ url: result.secure_url })),
    });

    return imageResult;
  } catch (error) {
    throw error;
  }
}

/**
 * Input:
 * {
 *    fieldsName1: Express.Multer.File[],
 *    fieldsName2: Express.Multer.File[]
 * }
 *
 * Output: Prisma batch payload
 */
export async function createFieldsImages(
  files: Record<string, Express.Multer.File[]>,
) {
  try {
    if (!files) throw new AppError(400, "No files provided");

    const fields: Record<string, string[]> = {};

    for (const key in files) {
      fields[key] = files[key]!.map((file) => file.path);
    }

    const uploadResult = await uploadFieldsUtil(fields);
    const imagesData = Object.values(uploadResult)
      .flat()
      .map((element) => ({ url: element.secure_url }));

    const imagesResult = await prisma.image.createMany({ data: imagesData });

    return imagesResult;
  } catch (error) {
    throw error;
  }
}

/* ---------------------------------- NOTES --------------------------------- */
// controller -> HTTP methods
// service -> CRUD names
// util -> Verb
