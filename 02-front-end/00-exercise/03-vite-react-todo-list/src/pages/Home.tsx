import { useState, useRef } from "react";

// import type { ITodo } from "./types";

interface ITodo {
  name: string;
  isCompleted: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemLeft = todos.length;

  function handleAddTodo() {
    if (inputRef.current?.value) {
      setTodos([
        ...todos,
        {
          name: inputRef.current.value,
          isCompleted: false,
        },
      ]);

      inputRef.current.value = "";
    }
  }

  function clearAll() {
    setTodos([]);
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
          className="absolute max-h-75 z-1 min-w-full"
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
          <div className="flex flex-col text-[18px] rounded-[5px] mb-[49px] bg-[#25273D] text-[#C8CBE7]">
            {todos.map((todo, index) => (
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
                  className={`cursor-pointer flex  justify-between group w-[400px] ${
                    todo.isCompleted ? "line-through text-[#4D5067]" : ""
                  }`}
                >
                  {todo.name}
                  <span className="hidden group-hover:flex text-[#4D5067] text-4xl">
                    x
                  </span>
                </span>
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
                <div className="text-[#3A7CFD] cursor-pointer hover:font-bold">
                  All
                </div>
                <div className="cursor-pointer hover:font-bold hover:text-[#E3E4F1]">
                  Active
                </div>
                <div className="cursor-pointer hover:font-bold hover:text-[#E3E4F1]">
                  Completed
                </div>
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
