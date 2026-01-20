import express, {
  NextFunction,
  type Application,
  type Request,
  type Response,
} from "express";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import { notFound } from "./middlewares/notfound.middleware.js";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

app.use(loggerMiddleware);

app.get("/api/status", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "API is running!", uptime: process.uptime() });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/posts/:postId/comment", commentRoutes);

app.use(notFound);
app.use(globalErrorHandler);

app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
