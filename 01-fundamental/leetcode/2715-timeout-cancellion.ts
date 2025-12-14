/* ---------------------------------- INPUT --------------------------------- */
const fn = (x) => x * 5;
const args = [2, 3, 8, 6, 10];
const t = 20;
const cancelTimesMs = 50;
/* ------------------------------------ - ----------------------------------- */
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number) {
  const cancelFn = cancellable(fn, args, t);
  return setTimeout(cancelFn, cancelTimesMs);
}

// console.log(setTimeout(fn(...args), t));
// console.log(
//   setTimeout((...args) => {
//     args * 5;
//   }, t)
// );
