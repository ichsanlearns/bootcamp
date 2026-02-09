import "dotenv/config";

import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import eventRoutes from "./routes/event.route.js";
import imageRoutes from "./routes/image.router.js";
import orderRoutes from "./routes/order.route.js";

import { notFound } from "./middleware/not-found.middleware.js";
import { error } from "./middleware/error.middleware.js";
import { orderExpirationJob } from "./jobs/order-expiration.job.js";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());
app.use(cors({ origin: process.env.WEB_URL }));

app.get("/api/status", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ messsage: "API is running!", uptime: process.uptime() });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(error);

orderExpirationJob.start();

app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));

export default app;
