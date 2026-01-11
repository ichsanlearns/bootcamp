import express, { type Application } from "express";
import fs from "fs/promises";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}

// CRUD

app.post("/api/todos", async (request, response) => {
  const body = request.body;
  const oldTodos = JSON.parse(
    await fs.readFile("data/todos.json", "utf-8")
  ) as ITodo[];

  const newTodo: ITodo = {
    id:
      oldTodos.length > 0
        ? Math.max(...oldTodos.map((todo) => todo.id)) + 1
        : 1,
    title: body.title,
    completed: false,
    createdAt: new Date(),
    updatedAt: null,
  };

  const latestTodos = [...oldTodos, newTodo];

  await fs.writeFile("data/todos.json", JSON.stringify(latestTodos, null, 2));

  response.status(201).json({ message: "Added new todo", data: newTodo });
});

app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
