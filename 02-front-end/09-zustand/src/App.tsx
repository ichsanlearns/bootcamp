import { useCounterStore } from "./store/counter-store";

export default function App() {
  const { counter, increment, decrement, reset } = useCounterStore();

  return (
    <main>
      <h1>Zustand Counter</h1>;<h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </main>
  );
}
