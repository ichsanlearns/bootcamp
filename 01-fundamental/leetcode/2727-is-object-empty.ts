type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj) {
  for (const element in obj) return false;
  return true;
}

const obj = { x: 5, y: 42 };
const arrKosong = [];
console.log(isEmpty(arrKosong));
