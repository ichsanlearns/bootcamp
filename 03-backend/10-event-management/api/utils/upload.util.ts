import { cloudinary } from "../src/lib/cloudinary.js";
import fs from "node:fs/promises";

async function uploadToCloudinary(filePath: string) {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath);

    return uploadResult;
  } catch (error) {
    throw new Error("Failed to upload image to Cloudinary");
  } finally {
    await fs.unlink(filePath);
  }
}

// filePath: "/public/image.jpg"
export async function uploadSingleUtil(filePath: string) {
  const singleResult = await uploadToCloudinary(filePath);
  return singleResult;
}

// filePaths: ["/public/image1.jpg", "/public/image2.jpg", ... , "/public/imageN.jpg"]
export async function uploadArrayUtil(filePaths: string[]) {
  const arrayResult = Promise.all(
    filePaths.map((filepath: string) => {
      return uploadToCloudinary(filepath);
    }),
  );

  return arrayResult;
}

/*
fields: {
  thumbnail: ["/public/thumbnail1.jpg", "/public/thumbnail2.jpg"]
  featured: ["/public/featured1.jpg", "/public/featured2.jpg", "/public/featured3.jpg"]
}
*/
export async function uploadFieldsUtil(fields: Record<string, string[]>) {
  const fieldsResult: Record<string, string[]> = {};

  for (const key in fields) {
    const filePaths = fields[key];
    if (!filePaths) {
      throw new Error("File is missing");
    }
    fieldsResult[key] = await uploadArrayUtil(filePaths);
  }

  return fieldsResult;
}
