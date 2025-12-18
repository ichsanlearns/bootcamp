import { createContext, useState, type ReactNode } from "react";
import { CounterContext } from "../context/counter-context";

export function CounterProvider(props: { children: ReactNode }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider
      value={{ counter: counter, setCounter: setCounter }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}
