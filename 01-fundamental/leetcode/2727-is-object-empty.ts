const obj = { x: 5, y: 42 };
const objKosong = {};
const arr2 = new Array(1, 2, 3, 4);

const arrNull = [null, false, 0];
console.log(Boolean(arrNull[0]?.[0]));

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  let temp: any = [];

  console.log(Object.entries(obj));
  temp = Object.entries(obj).toString();
  console.log(temp);
  if (temp[0]?.[0] && temp[0]?.[1]) {
    console.log(temp);
    return false;
  } else {
    return true;
  }
}

console.log(isEmpty(arrNull));
