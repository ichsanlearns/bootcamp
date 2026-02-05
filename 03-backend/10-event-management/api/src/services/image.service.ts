import {
  uploadArrayUtil,
  uploadFieldsUtil,
  uploadSingleUtil,
} from "../../utils/upload.util.js";
import { prisma } from "../lib/prisma.lib.js";

export async function uploadSingleService(file: Express.Multer.File) {
  if (!file) {
    throw new Error("No file provided");
  }
  // upload file ke cloudinary untuk mendapatkan url
  const uploadResult = await uploadSingleUtil(file.path);

  // save url ke database lewat prisma(prisma.image.create)
  const imageResult = await prisma.image.create({
    data: { url: uploadResult.secure_url },
  });

  return imageResult;
}

export async function uploadArrayService(files: Express.Multer.File[]) {
  if (!files) {
    throw new Error("No files provided");
  }

  const uploadResult = await uploadArrayUtil(files.map((file) => file.path));
  const imageResult = await prisma.image.createMany({
    data: uploadResult.map((result) => ({ url: result.secure_url })),
  });

  console.log(uploadResult);
  console.log(imageResult);

  return imageResult;
}

export async function uploadFieldsService(files: Express.Multer.File[][]) {
  if (!files) {
    throw new Error("No files provided");
  }

  const fields: Record<string, string[]> = {};

  for (const key in files) {
    fields[key] = files[key]!.map((file) => file.path);
  }

  const uploadResult = await uploadFieldsUtil(fields);

  const uploadResultInArray = [];

  for (const key in uploadResult){
    uploadResultInArray.push(uploadResult[key]?.map(el=> el.))
  }
    await prisma.image.createMany({ data: uploadResultInArray });
}
