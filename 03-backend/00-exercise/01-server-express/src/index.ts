import express from "express";
import fs from "fs/promises";

type TTodos = {
  id: number;
  title: string;
  completed: boolean;
};

const PORT: number = 8000;

const server = express();

const newData = {
  id: 6,
  title: "Learn ExpressJS",
  completed: false,
};

const newDataUpdate = {
  id: 3,
  title: "Test Update",
  completed: true,
};

server.get("/status", (request, response) => {
  response
    .status(200)
    .json({ message: "API is running perfectly!", uptime: process.uptime() });
});

server.get("/todos", async (request, response) => {
  const todosDataJSON = await fs.readFile("data/todos.json", "utf-8");
  const todosData = JSON.parse(todosDataJSON);

  response.status(200).json(todosData);
});

server.get("/todos/:id", async (request, response) => {
  const todosDataJSON = await fs.readFile("data/todos.json", "utf-8");
  const todosData = JSON.parse(todosDataJSON);
  const todos = todosData.find(
    (todo: TTodos) => todo.id === Number(request.params.id)
  );

  response.status(200).json(todos);
});

server.post("/todos", async (request, response) => {
  const todosDataJSON = await fs.readFile("data/todos.json", "utf-8");
  const todosData = JSON.parse(todosDataJSON);
  const todosDataBaru = [...todosData, newData];
  await fs.writeFile("data/todos.json", JSON.stringify(todosDataBaru, null, 2));

  response.status(200).json(todosDataBaru);
});

server.delete("/todos/:id", async (request, response) => {
  const todosDataJSON = await fs.readFile("data/todos.json", "utf-8");
  const todosData = JSON.parse(todosDataJSON);
  const todosFiltered = todosData.filter(
    (todo: TTodos) => todo.id !== Number(request.params.id)
  );
  await fs.writeFile("data/todos.json", JSON.stringify(todosFiltered, null, 2));

  response.status(200).json("Data berhasil terhapus");
});

server.put("/todos/:id", async (request, response) => {
  const todosDataJSON = await fs.readFile("data/todos.json", "utf-8");
  const todosData: TTodos[] = JSON.parse(todosDataJSON);
  const id = todosData.findIndex(
    (todo) => todo.id === Number(request.params.id)
  );

  todosData[id] = {
    id: newDataUpdate.id,
    title: newDataUpdate.title,
    completed: newDataUpdate.completed,
  };

  await fs.writeFile("data/todos.json", JSON.stringify(todosData, null, 2));

  response.status(200).json("Data berhasil terupdate");
});

server.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
