import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";

import db from "../src/configs/db.config.ts";

const app = express();
const PORT: number = 8000;
app.use(express.json());

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

    // const filteredTask = tasks.filter(
    //   (task) =>
    //     task.completed === undefined ||
    //     task.completed === (completed === "true")
    // );

    const filteredTasks = await db.query(
      `SELECT * FROM tasks WHERE completed = $1`,
      [completed]
    );

    response.json({ message: "success", body: filteredTasks.rows });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

// 2. Get Task By ID
app.get("/tasks/:id", async (request, response) => {
  try {
    const { id } = request.params;
    // const task = tasks.find((task) => task.id === parseInt(id));

    const filteredTasks = await db.query(`SELECT * FROM tasks WHERE id = $1`, [
      id,
    ]);

    if (!filteredTasks) {
      response.status(400).json({ error: "Task not found" });
    }

    response.json({
      message: "success",
      body: {
        id: filteredTasks.rows[0].id,
        title: filteredTasks.rows[0].title,
      },
    });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

// 5. Protected route (role teacher)
app.get("/tasks/:id/details", authMiddleware, async (request, response) => {
  try {
    const { id } = request.params;
    const filteredTasks = await db.query(`SELECT * FROM tasks WHERE id = $1`, [
      id,
    ]);

    if (!filteredTasks) {
      response.status(400).json({ error: "Task not found" });
    }

    response.json({
      message: "success",
      body: filteredTasks.rows,
    });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

// 6. POST protected /tasks?role=teacher
app.post("/tasks", authMiddleware, async (request, response) => {
  try {
    const body = request.body;
    const addedTask = await db.query(
      `SELECT * FROM tasks 
      WHERE title = $1 AND class = $2
      `,
      [body.title, body.class]
    );

    if (addedTask.rows.length > 0) {
      return response.json({ message: "Title dan Kelas tersebut sudah ada" });
    }

    await db.query(
      `INSERT INTO tasks(title, subject, completed, teacher_name, class)
                    VALUES ($1, $2, $3, $4, $5)`,
      [body.title, body.subject, body.completed, body.teacher_name, body.class]
    );

    // if (!filteredTasks) {
    //   response.status(400).json({ error: "Task not found" });
    // }

    response.json({
      message: "success",
      body: body.rows,
    });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

// 7. PATCH protected /tasks?role=teacher
app.patch("/tasks/:id", authMiddleware, async (request, response) => {
  try {
    const id = Number(request.params.id);
    const body = request.body;
    const addedTask = await db.query(
      `SELECT * FROM tasks 
      WHERE title = $1 AND class = $2 AND id != $3
      `,
      [body.title, body.class, id]
    );

    console.info(addedTask.rows);

    if (addedTask.rows.length > 0) {
      return response.json({ message: "Title dan Kelas sama!" });
    }

    await db.query(
      `UPDATE tasks
      SET
        title = $1,
        subject = $2,
        completed = $3,
        teacher_name = $4,
        class = $5,
        WHERE id = $6
      `,
      [
        body.title,
        body.subject,
        body.completed,
        body.teacher_name,
        body.class,
        id,
      ]
    );

    // if (!filteredTasks) {
    //   response.status(400).json({ error: "Task not found" });
    // }

    response.json({
      message: "success",
      body: body.rows,
    });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

// 8. DELETE protected /tasks/:id?role=teacher
app.delete("/tasks/:id", authMiddleware, async (request, response) => {
  try {
    const id = Number(request.params.id);
    const deletedTasks = await db.query(
      `
      DELETE FROM tasks
      WHERE
        id = $1 RETURNING *
      `,
      [id]
    );

    if (deletedTasks.rows.length === 0) {
      return response.json({ message: "Data tidak ada" });
    }

    response.json({
      message: "success",
      body: deletedTasks.rows,
    });
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
