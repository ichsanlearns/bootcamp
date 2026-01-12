import express, { response } from "express";

import { rateLimit } from "express-rate-limit";

import userRoutes from "./routes/user.route.ts";

import { notFound, error } from "./middlewares/error.middleware.ts";

const PORT: number = 8000;

const server = express();

/* ---------------------------- GLOBAL MIDDLEWARE --------------------------- */
// Untuk membaca data request.body
server.use(express.json());
server.use(rateLimit({ windowMs: 1000 * 10, limit: 5 }));

/* ------------------------------- GET STATUS ------------------------------- */
server.get("/status", async (request, response) => {
  response
    .status(200)
    .json({ message: "API is running perfectly!", uptime: process.uptime() });
});

server.use("/api/users", userRoutes);

server.use(notFound); // 404 handler
server.use(error); // Global error handler

// START SERVER
server.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// await fetch("http://api/something", {
// method: "POST",
// headers: {"content-type": "application/json"},
// body: JSON.stringify({}),
// });
