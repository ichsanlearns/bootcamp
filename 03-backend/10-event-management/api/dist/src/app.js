import express, {} from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.get("/api/status", (req, res) => {
    res
        .status(200)
        .json({ messsage: "API is running!", uptime: process.uptime() });
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
//# sourceMappingURL=app.js.map