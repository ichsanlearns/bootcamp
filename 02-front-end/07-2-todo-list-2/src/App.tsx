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

  const [filter, setFilter] = useState<"All" | "Completed" | "Not Completed">();
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

  function toggleCompleted(todo: ITodo) {
    // console.log(JSON.parse(localStorage.todos)[1].id);
    // const test = JSON.parse(localStorage.todos)[1].id;
    // console.log(test);

    setTodos((prev) =>
      prev.map((data) =>
        data.id === todo.id ? { ...data, isCompleted: !data.isCompleted } : data
      )
    );
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
      <ul
        style={{
          marginTop: "50px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        {/* {[
          <li>{initialTodo[0].description}</li>,
          <li>{initialTodo[1].description}</li>,
          <li>{initialTodo[2].description}</li>,
          ]} */}
        {todos
          .filter((todo) => {
            if (filter === "Completed") return todo.isCompleted;
            if (filter === "Not Completed") return !todo.isCompleted;
            return true;
          })
          .map((todo) => (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              key={todo.id}
            >
              <div
                onClick={() => toggleCompleted(todo)}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "12px",
                  border: "1px solid blue",
                  backgroundColor: todo.isCompleted ? "blue" : "red",
                }}
              ></div>
              <span>{todo.description}</span>
              <div style={{ display: "flex", gap: "5px" }}>
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
                <button onClick={() => deleteTodo(todo.id)}>edit</button>
              </div>
            </li>
          ))}
      </ul>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span style={{ cursor: "pointer" }} onClick={() => setFilter("All")}>
          All
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setFilter("Not Completed")}
        >
          Not Completed
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </span>
      </div>
    </main>
  );
}

export default App;
