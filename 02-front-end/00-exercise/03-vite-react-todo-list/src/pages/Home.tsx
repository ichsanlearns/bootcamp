import { useState, useRef } from "react";

// import type { ITodo } from "./types";

interface ITodo {
  name: string;
  isCompleted: boolean;
  createdAt: Date;
}

type SortOrder = "oldest" | "newest";
type Filters = "All" | "Active" | "Completed";

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState<Filters>("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const itemLeft = todos.length;
  const filters: Filters[] = ["All", "Active", "Completed"];

  const filteredTodos = todos
    .filter((todo) => {
      const matchFilter =
        filter === "All"
          ? true
          : filter === "Active"
          ? !todo.isCompleted
          : todo.isCompleted;
      const matchSearch = todo.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchFilter && matchSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "oldest") {
        return a.createdAt.getTime() - b.createdAt.getTime();
      } else {
        return b.createdAt.getTime() - a.createdAt.getTime();
      }
    });

  function handleAddTodo() {
    if (inputRef.current?.value) {
      setTodos([
        ...todos,
        {
          name: inputRef.current.value,
          isCompleted: false,
          createdAt: new Date(),
        },
      ]);

      inputRef.current.value = "";
    }
  }

  function deleteTodo(name: string) {
    const filteredTodo = todos.filter((todo) => todo.name !== name);
    setTodos(filteredTodo);
  }

  function clearAll() {
    setTodos([]);
    const filteredTodo = todos.filter((todo) => todo.isCompleted !== true);
    setTodos(filteredTodo);
  }

  function handleToggleTodo(todo: ITodo) {
    setTodos((prev) =>
      prev.map((item) =>
        item.name === todo.name
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  }

  return (
    <div className="relative min-h-screen bg-black">
      <div className="flex justify-center">
        <img
          src="background.jpg"
          alt="background-image"
          className="absolute max-h-175 z-1 min-w-full rounded-b-2xl"
        />
        <div className="flex flex-col z-0 w-[540px] mt-17.5 z-2">
          <div className="flex justify-between items-center mb-[48px]">
            <h1 className="text-white font-bold text-[40px] leading-[100%] tracking-[15px]">
              TODO
            </h1>
            <img src="sun.png" alt="sun" className="w-[26px] h-[26px]" />
          </div>
          <div className="flex items-center bg-[#25273D] h-[64px] rounded-[5px] p-[20px] gap-[20px] mb-[24px]">
            <div className="w-[24px] h-[24px] rounded-full border border-[#393A4B]"></div>
            <input
              type="text"
              ref={inputRef}
              className="focus:outline-0 text-[#C8CBE7] text-[18px] w-[350px]"
            />
            <button
              className="border border-[#393A4B] p-2 rounded-lg text-[#C8CBE7]"
              onClick={handleAddTodo}
            >
              add todo
            </button>
          </div>
          <div className="flex p-5 items-center bg-[#25273D] h-[64px] rounded-[5px] gap-5  mb-[24px]">
            <span className="text-[#C8CBE7]">SEARCH: </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search todo..."
              className="focus:outline-0 text-[#C8CBE7] text-[18px] w-[500px]"
            />
          </div>

          <div className="flex p-5 items-center bg-[#25273D] h-[64px] rounded-[5px] gap-5  mb-[24px]">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="text-white h-10 w-300 outline-0"
              name="Date"
              id=""
            >
              <option className="text-black" value="oldest">
                Oldest
              </option>
              <option className="text-black" value="newest">
                Newest
              </option>
            </select>
          </div>

          <div className="flex flex-col text-[18px] rounded-[5px] mb-[49px] bg-[#25273D] text-[#C8CBE7]">
            {filteredTodos.map((todo, index) => (
              <div
                key={index}
                className=" flex gap-[24px] border-b align-middle items-center h-[64px]"
              >
                <button
                  className={`cursor-pointer ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 ${
                    todo.isCompleted
                      ? "bg-gradient-to-br from-sky-400 to-purple-400"
                      : "border border-[#393A4B]"
                  }`}
                  onClick={() => handleToggleTodo(todo)}
                >
                  {todo.isCompleted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="white"
                      className="w-[12px] h-[12px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  )}
                </button>
                <span
                  className={`cursor-pointer flex justify-between items-center group w-[400px] ${
                    todo.isCompleted ? "line-through text-[#4D5067]" : ""
                  }`}
                >
                  {todo.name}

                  {/* <span
                    onClick={() => deleteTodo(todo.name)}
                    className="leading-none group-hover:relative text-[#4D5067] text-4xl"
                    >
                    x
                    </span> */}
                </span>
                <button
                  className="cursor-pointer mr-10 rounded-xl outline-1 outline-white  p-1.75"
                  onClick={() => deleteTodo(todo.name)}
                >
                  delete
                </button>
              </div>
            ))}
          </div>
          {/* Bottom */}
          <div className="text-[#5B5E7E] flex items-center bg-[#25273D] h-[64px] rounded-[5px] p-[20px] gap-[20px] mb-[24px]">
            <div className="w-full h-16 rounded-b-[5px] bg-[#25273D] flex items-center justify-between p-[24px]">
              <div className="w-17.25 h-3.5 font-normal text-[14px] tracking-[-0.19px] text-[#5B5E7E]">
                {itemLeft} items left
              </div>
              <div className="flex items-center h-3.5 text-[14px] gap-[18px] hidden md:flex">
                {filters.map((f) => (
                  <button
                    onClick={() => setFilter(f)}
                    style={{
                      color: filter === f ? "white" : "#5B5E7E",

                      cursor: filter === f ? "not-allowed" : "pointer",
                    }}
                    disabled={filter === f}
                  >
                    {f}
                  </button>
                ))}
                {/* <div className="text-[#3A7CFD] cursor-pointer hover:font-bold">
                  All
                </div>
                <div className="cursor-pointer hover:font-bold hover:text-[#E3E4F1]">
                  Active
                </div>
                <div className="cursor-pointer hover:font-bold hover:text-[#E3E4F1]">
                  Completed
                </div> */}
              </div>
              <div
                className="my-auto cursor-pointer hover:font-bold"
                onClick={clearAll}
              >
                Clear Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
