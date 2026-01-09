import http from "http";
import fs from "fs/promises";

const PORT: number = 8000;

const server = http.createServer(async (request, response) => {
  const { url, method } = request;

  if (url === "/status" && method === "GET") {
    // response header
    response.writeHead(200, { "content-type": "application/json" });

    // response body
    response.write(
      JSON.stringify({
        message: "API is running perfectly!",
        uptime: process.uptime(),
      })
    );

    // end response
    response.end();
  } else if (url === "/users" && method === "GET") {
    const userDataJSON = await fs.readFile("data/users.json", "utf-8");
    const userData = JSON.parse(userDataJSON) || [""];

    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(userData));
    response.end();
  } else if (url === "/users" && method === "POST") {
  }
});

server.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
