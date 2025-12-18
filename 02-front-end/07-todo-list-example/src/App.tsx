import React, { useEffect, useState } from "react";
import "./App.css";

interface ITodo {
  id: number;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}

function App() {
  console.log("App rendered!");

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    function getInitialTodo() {
      const initialTodo = localStorage.getItem("todos");

      if (initialTodo) {
        setTodos(JSON.parse(initialTodo));
      }
    }

    getInitialTodo();
  }, []);

  function deleteTodo(deleteId: number) {
    const filteredTodo = todos.filter((todo) => todo.id !== deleteId);
    setTodos(filteredTodo);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const newestTodo: ITodo = {
      id: todos[todos.length - 1]?.id + 1 || 1,
      description: newTodo,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: null,
    };

    setTodos([...todos, newestTodo]);
    setNewTodo("");

    localStorage.setItem("todos", JSON.stringify([...todos, newestTodo]));
  }

  return (
    <main>
      <h1>Simple Todo List</h1>

      {/* Add Todo */}
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
      <ul>
        {/* {[
          <li>{initialTodo[0].description}</li>,
          <li>{initialTodo[1].description}</li>,
          <li>{initialTodo[2].description}</li>,
        ]} */}
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.description}</span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
