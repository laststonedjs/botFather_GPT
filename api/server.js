import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "This is ChatGPT AI app!"
  });
});

app.post("/", async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.status(500).send(err);
  }
})

app.listen(4000, () => console.log("Server is running on port 4000!"))