import fs from "fs/promises";
import path from "path";
import http from "http2";

const userDataJSON = await fs.readFile("data/users.json", "utf-8");

const userData = JSON.parse(userDataJSON);
const newData = {
  id: 6,
  name: "Angelina Jolie",
  age: 50,
  gender: "Female",
};

await fs.writeFile(
  "data/users.json",
  JSON.stringify([...userData, newData], null, 2)
);

// await fs.appendFile(
//   "data/users.json",
//   JSON.stringify({
//     id: 6,
//     name: "Angelina Jolie",
//     age: 50,
//     gender: "Female",
//   })
// );
