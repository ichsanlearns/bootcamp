import { useState, useRef } from "react";
import { useAuthStore } from "../store/authStore";

// import type { ITodo } from "./types";

interface ITodo {
  name: string;
  isCompleted: boolean;
  createdAt: number;
}

type FilterType = "all" | "active" | "completed";
type SortType = "newest" | "oldest";
export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("newest");
  const [search, setSearch] = useState("");

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  function handleAddTodo() {
    if (inputRef.current?.value) {
      setTodos([
        ...todos,
        {
          name: inputRef.current.value,
          isCompleted: false,
          createdAt: Date.now(),
        },
      ]);

      inputRef.current.value = "";
    }
  }

  // function clearAll() {
  //   setTodos([]);
  // }

  function handleToggleTodo(index: number) {
    setTodos((prev) => prev.map((todo, i) => (i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  }

  function handleDeleteTodo(index: number) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }

  function saveEdit(index: number) {
    setTodos((prev) => prev.map((todo, i) => (i === index ? { ...todo, name: editingText } : todo)));
    setEditingIndex(null);
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
  }

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.isCompleted;
      if (filter === "completed") return todo.isCompleted;
      return true;
    })
    .filter((todo) => todo.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sort === "newest" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt));

  const itemLeft = todos.filter((t) => !t.isCompleted).length;

  const email = useAuthStore((state) => state.email);

  return (
    <div className="relative min-h-screen bg-black">
      <div className="flex justify-center">
        <img src="background.jpg" alt="background-image" className="absolute max-h-75 z-1 min-w-full" />{" "}
        <div className="flex flex-col w-135 mt-17.5 z-2">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-white font-bold text-[40px] leading-[100%] tracking-[15px]">TODO</h1> <img src="sun.png" alt="sun" className="w-6.5 h-6.5" />
            {email && <span className="text-[#C8CBE7] text-sm">{email}</span>}
          </div>
          {/* Add Todo */}
          <div className="flex items-center bg-[#25273D] h-16 rounded p-5 gap-5 mb-6">
            <div className="w-6 h-6 rounded-full border border-[#393A4B]" />
            <input ref={inputRef} placeholder="Create a new todo..." className="bg-transparent outline-none text-[#C8CBE7] text-[18px] flex-1" />
            <button onClick={handleAddTodo} className="text-[#C8CBE7] border border-[#393A4B] px-3 py-1 rounded">
              Add
            </button>
          </div>
          {/* Search */}
          <input placeholder="Search todo..." value={search} onChange={(e) => setSearch(e.target.value)} className="mb-4 bg-[#25273D] p-3 rounded text-[#C8CBE7] outline-none" />
          {/* Sort */}
          <select className="mb-4 bg-[#25273D] p-3 rounded text-[#C8CBE7]" onChange={(e) => setSort(e.target.value as SortType)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          {/* Todo List */}
          <div className="bg-[#25273D] rounded">
            {filteredTodos.map((todo, index) => (
              <div key={index} className="flex items-center gap-6 px-5 h-16 border-b border-[#393A4B]">
                <button onClick={() => handleToggleTodo(index)} className={`w-6 h-6 rounded-full flex items-center justify-center ${todo.isCompleted ? "bg-linear-to-br from-sky-400 to-purple-400" : "border border-[#393A4B]"}`}>
                  {todo.isCompleted && <span className="text-white text-sm">✓</span>}
                </button>

                {editingIndex === index ? (
                  <input
                    autoFocus
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onBlur={() => saveEdit(index)}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit(index)}
                    className="bg-transparent outline-none text-[#C8CBE7] flex-1"
                  />
                ) : (
                  <span
                    onDoubleClick={() => {
                      setEditingIndex(index);
                      setEditingText(todo.name);
                    }}
                    className={`flex-1 cursor-pointer ${todo.isCompleted ? "line-through text-white opacity-60" : "text-white"}`}
                  >
                    {todo.name}
                  </span>
                )}

                <button onClick={() => handleDeleteTodo(index)} className="text-[#4D5067] hover:text-red-500 text-xl">
                  ×
                </button>
              </div>
            ))}
          </div>
          {/* Bottom */}
          <div className="bg-[#25273D] h-16 rounded mt-4 px-6 flex items-center justify-between text-[#5B5E7E] text-sm">
            <span>{itemLeft} items left</span>

            <div className="flex gap-4">
              <button onClick={() => setFilter("all")}>All</button>
              <button onClick={() => setFilter("active")}>Active</button>
              <button onClick={() => setFilter("completed")}>Completed</button>
            </div>
            <div className="my-auto cursor-pointer hover:font-bold " onClick={clearCompleted}>
              Clear Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
