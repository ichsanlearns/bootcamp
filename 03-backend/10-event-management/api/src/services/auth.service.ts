import bcrypt from "bcryptjs";

// import { prisma } from "../lib/prisma.lib.js";

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(
  password: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(password, hashedPassword);
}

/* ---------------------------------- NOTES --------------------------------- */
// Hashing = Mengubah teks menjadi random character | Tidak bisa dikembalikan ke bentuk awal
// Encryption = Mengubah teks menjadi random character | Bisa dikembalikan ke bentuk awal
