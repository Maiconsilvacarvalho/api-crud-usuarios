import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 8100;

app.get("/", (req, res) => {
  res.send("consegui");
});

app.listen(port, () => console.log(`listening on port ${port}!`));
