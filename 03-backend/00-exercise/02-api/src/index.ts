import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";

const app = express();
const PORT: number = 8000;

// 3. Logger Middleware
const loggerMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    console.log(
      `[${new Date().toISOString()}, ${request.ip}] ${request.method} ${
        request.url
      }`
    );
    next();
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
};

// 4. Authorization Middleware
const authMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { role } = request.query;

    if (role !== "teacher") {
      throw new Error("Unauthorized access");
    }
    next();
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
};

app.use(express.json());

interface ITasks {
  id: number;
  title: string;
  subject: string;
  completed: boolean;
}

const tasks: ITasks[] = [
  { id: 1, title: "Math Homework", subject: "Math", completed: false },
  { id: 2, title: "Science Project", subject: "Science", completed: true },
  { id: 3, title: "English Essay", subject: "English", completed: false },
];

// 3. Activate Global Logger
app.use(loggerMiddleware);

// 1. Get All Task (Query Parameters)
app.get("/tasks", async (request, response) => {
  try {
    const { completed } = request.query;

    const filteredTask = tasks.filter(
      (task) =>
        task.completed === undefined ||
        task.completed === (completed === "true")
    );

    response.json({ message: "success", body: filteredTask });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

// 2. Get Task By ID
app.get("/tasks/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const task = tasks.find((task) => task.id === parseInt(id));

    if (!task) {
      response.status(400).json({ error: "Task not found" });
    }

    response.json({
      message: "success",
      body: {
        id: task?.id,
        title: task?.title,
      },
    });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

// 5. Protected route (role teacher)
app.get("/tasks/:id/details", authMiddleware, (request, response) => {
  try {
    const { id } = request.params;
    const task = tasks.find((task) => task.id === Number(id));

    if (!task) {
      response.status(400).json({ error: "Task not found" });
    }

    response.json({
      message: "success",
      body: task,
    });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
