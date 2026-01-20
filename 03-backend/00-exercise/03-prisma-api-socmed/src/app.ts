import express, {
  NextFunction,
  type Application,
  type Request,
  type Response,
} from "express";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import { AppError } from "./utils/error.util.js";

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

app.use((req, res, next) => {
  next(
    new AppError(
      `Route ${req.method} ${req.originalUrl} does not exist on this server`,
      404,
    ),
  );
});

app.use(globalErrorHandler);

app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
