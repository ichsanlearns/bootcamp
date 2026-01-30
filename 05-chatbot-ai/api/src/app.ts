import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/api/status", (req, res) => {
  res
    .status(200)
    .json({ messsage: "API is healthy!", uptime: process.uptime() });
});

app.post("/api/something", (req, res) => res.status(200));

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a grumpy chat bot" },
            { role: "user", content: message },
          ],
        }),
      },
    );

    const data = await response.json();

    res.status(200).json(data.choices[0].message.content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
