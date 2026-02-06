import { cloudinary } from "../lib/cloudinary.js";
import fs from "node:fs/promises";
import type { UploadApiResponse } from "cloudinary";
import { AppError } from "./app-error.util.js";

/**
 * Upload single path to Cloudinary
 * input: filePath(string) -> "/public/image.png"
 * Output: UploadApiResponse (Cloudinary result object)
 */
async function uploadToCloudinary(filePath: string) {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath);

    return uploadResult;
  } catch (error) {
    throw new AppError(500, "Failed to upload image to Cloudinary");
  } finally {
    await fs.unlink(filePath);
  }
}

export async function uploadSingleUtil(filePath: string) {
  try {
    const singleResult = await uploadToCloudinary(filePath);
    return singleResult;
  } catch (error) {
    throw new AppError(500, "Failed to upload single file");
  }
}

/**
 * Input: filePaths (string[]) -> ["/public/image1.png", "/public/image2.png"]
 * Output: UploadApiReponse
 */
export async function uploadArrayUtil(filePaths: string[]) {
  try {
    const arrayResult = Promise.all(
      filePaths.map((filepath: string) => {
        return uploadToCloudinary(filepath);
      }),
    );
    return arrayResult;
  } catch (error) {
    throw new AppError(500, "Failed to upload array file");
  }
}

/**
 * Input:
 * {
 *    thumbnail: ["/pubkic/t1.jpg", "/pubkic/t2.jpg"],
 *    featured: ["/pubkic/f2.jpg", "/pubkic/f2.jpg"]
 * }
 *
 * Output:
 * {
 *    thumbnail: UploadApiResponse[].
 *    featured: UploadApiResponse[]
 * }
 */
export async function uploadFieldsUtil(fields: Record<string, string[]>) {
  try {
    const fieldsResult: Record<string, UploadApiResponse[]> = {};

    for (const key in fields) {
      fieldsResult[key] = await uploadArrayUtil(fields[key]!);
    }

    return fieldsResult;
  } catch (error) {
    throw new AppError(500, "Failed to upload fields file");
  }
}
