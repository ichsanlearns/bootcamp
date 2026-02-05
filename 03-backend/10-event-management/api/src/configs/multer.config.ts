// import multer from "multer";
// import path from "node:path";
// // import fs from "fs/promises";
// import fs from "node:fs";

// const publicDir = path.join(process.cwd(), "public");

// if (!fs.existsSync(publicDir)) {
//   fs.mkdirSync(publicDir, { recursive: true });
// }

// // storage configs
// export const storage = multer.diskStorage({
//   destination: (_req, _file, cb) => {
//     cb(null, publicDir);
//   },

//   filename: (_req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const filename = `${Date.now()}-${Math.random() * 1e9}${ext}`;
//     cb(null, filename);
//   },
// });

// // filter configs
// export const fileFilter = (_req, file, cb) => {
//   const allowedMimeTypes = [
//     "image/jpeg",
//     "image/png",
//     "image/webp",
//     // "application/pdf",
//     // "application/json",
//   ];

//   if (!allowedMimeTypes.includes(file.mimetype)) {
//     return cb(new Error("Invalid file type"));
//   }

//   cb(null, true);
// };

// export const limits = { fileSize: 5 * 1024 * 1024, files: 5 };
