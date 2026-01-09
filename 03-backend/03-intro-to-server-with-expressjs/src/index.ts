import express from "express";
import fs from "fs/promises";

const PORT: number = 8000;

const server = express();

server.get("/status", (request, response) => {
  response
    .status(200)
    .json({ message: "API is running perfectly!", uptime: process.uptime() });
});
server.get("/users", async (request, response) => {
  const userDataJSON = await fs.readFile("data/users.json", "utf-8");
  const userData = JSON.parse(userDataJSON);

  response.status(200).json(userData);
});
server.post("/users", (request, response) => {});

//   const { url, method } = request; // const server = http.createServer(async (request, response) => {

//   if (url === "/status" && method === "GET") {
//     // response header
//     response.writeHead(200, { "content-type": "application/json" });

//     // response body
//     response.write(
//       JSON.stringify({
//         message: "API is running perfectly!",
//         uptime: process.uptime(),
//       })
//     );

//     // end response
//     response.end();
//   } else if (url === "/users" && method === "GET") {
//     const userDataJSON = await fs.readFile("data/users.json", "utf-8");
//     const userData = JSON.parse(userDataJSON) || [""];

//     response.writeHead(200, { "content-type": "application/json" });
//     response.write(JSON.stringify(userData));
//     response.end();
//   } else if (url === "/users" && method === "POST") {
//   }
// });

server.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
