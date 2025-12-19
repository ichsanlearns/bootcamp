import React, { useEffect, useState } from "react";
import "./App.css";

interface ITodo {
  id: number;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}

type Filters = "All" | "Completed" | "Active";

function App() {
  console.log("App rendered!");

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<Filters>("All");
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((todo) => {
    // if (filter === "Completed") return todo.isCompleted;
    // if (filter === "Active") return !todo.isCompleted;
    // return true;

    const matchFilter =
      filter === "All"
        ? true
        : filter === "Completed"
        ? todo.isCompleted
        : !todo.isCompleted;
    const matchSearch = todo.description
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  const filters: Filters[] = ["All", "Completed", "Active"];

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

  function toggleStatus(id: number) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
          updatedAt: new Date(),
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <main>
      <h1>Simple Todo List</h1>

      {/* Search Todo */}
      <input
        type="text"
        placeholder="Search todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleStatus(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.description}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>

      {/* Filter Buttons */}
      <div>
        {/* <button
          onClick={() => setFilter("All")}
          style={{
            backgroundColor: filter === "All" ? "grey" : "black",
            cursor: filter === "All" ? "not-allowed" : "pointer",
          }}
          disabled={filter === "All"}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Completed")}
          style={{
            backgroundColor: filter === "Completed" ? "grey" : "black",
            cursor: filter === "Completed" ? "not-allowed" : "pointer",
          }}
          disabled={filter === "Completed"}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("Active")}
          style={{
            backgroundColor: filter === "Active" ? "grey" : "black",
            cursor: filter === "Active" ? "not-allowed" : "pointer",
          }}
          disabled={filter === "Active"}
        >
          Active
        </button> */}

        {filters.map((f) => (
          <button
            onClick={() => setFilter(f)}
            style={{
              backgroundColor: filter === f ? "grey" : "black",
              cursor: filter === f ? "not-allowed" : "pointer",
            }}
            disabled={filter === f}
          >
            {f}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
