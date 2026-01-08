import { useState, useRef } from "react";
import { useAuthStore } from "../../store/authStore";

import type { ITodo } from "./types";

export default function Todo() {
  const { email } = useAuthStore();
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

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
    <div className="flex justify-center ">
      <div>
        <h1>Welcome {email}</h1>
      </div>
      <img
        src="/todo/bg-img.png"
        alt="bg-img"
        className="absolute max-h-[300px] -z-10"
      />
      <div className="flex flex-col z-0 w-[540px] mt-17.5">
        <div className="flex justify-between items-center mb-[48px]">
          <h1 className="text-white font-bold text-[40px] leading-[100%] tracking-[15px]">
            TODO
          </h1>
          <img src="/todo/sun.png" alt="sun" className="w-[26px] h-[26px]" />
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
              className="flex gap-[24px] border-b align-middle items-center h-[64px]"
            >
              <button
                className={`ml-[20px] w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300 ${
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
                    stroke-width={3}
                    stroke="white"
                    className="w-[12px] h-[12px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                )}
              </button>
              <span
                className={`w-[400px] ${
                  todo.isCompleted ? "line-through text-[#4D5067]" : ""
                }`}
              >
                {todo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
