import { useRef, useState, useEffect, useContext } from "react";
import { CounterContext } from "./context/counter-context";

export default function App() {
  console.log("App Rendered");

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // let counter = 0;
  // const counterState = useState(0); // [variableState, functionSetState]
  // const counterVariable = counterState[0];
  // const counterSetState = counterState[1];
  // const [counter, setCounter] = useState(0);
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  const counterCTX = useContext(CounterContext);

  if (!counterCTX) throw new Error("Counter Context is not available!");

  const { counter, setCounter } = counterCTX;

  useEffect(() => {
    console.log("useEffect active!");

    document.title = `Counter state: ${counter}`;
  }, [counter]);

  return (
    <main>
      {/* useRef */}
      <section className="min-h-screen flex justify-center items-center flex-col">
        <video
          src="video.mp4"
          controls={false}
          className="h-full"
          ref={videoRef}
        />
        <div className="mt-4 flex gap-4">
          {isVideoPlayed ? (
            <button
              onClick={() => {
                videoRef.current?.pause();
                setIsVideoPlayed(false);
              }}
              className="border p-2"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={() => {
                videoRef.current?.play();
                setIsVideoPlayed(true);
              }}
              className="border p-2"
            >
              Play
            </button>
          )}
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-8"></div>

      {/* useState */}
      <section className="grid place-items-center my-6">
        <p className="text-5xl font-bold mb-2">{counter}</p>
        <div className="flex gap-2">
          <div
            className="border p-2 cursor-pointer"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment (+)
          </div>
          <div
            className="border p-2 cursor-pointer"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Decrement (-)
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-8"></div>

      {/* useContext */}
      <section className="grid place-items-center my-6">
        <Level1 />
      </section>
    </main>
  );
}

function Level1() {
  const { counter } = useContext(CounterContext)!;
  return (
    <div className="border p-2">
      <p>Level 1: {counter}</p>
      <Level2 />
    </div>
  );
}

function Level2() {
  return (
    <div className="border p-2">
      <p>Level 2: -</p>

      <Level3 />
    </div>
  );
}

function Level3() {
  const { counter } = useContext(CounterContext)!;
  return (
    <div className="border p-2">
      <p>Level 3: {counter}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
/*

1. Hook hanya bisa dipanggil di dalam top level component

1. useRef: Mengakses element DOM secara langsung
2. useState: Memory aplikasi. Kalau memory-nya berubah, tampilan aplikasi akan dibuat ulang
3. useEffect: Menghandle side-effects (apapun yang bukan merupakan bagian JSX)
4. useContext: Menghandle distribusi state ke berbagai komponen yang berbeda

*/
