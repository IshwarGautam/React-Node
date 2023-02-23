import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  return res.send({
    id: 1,
    name: "IG Tech Team",
  });
});

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});
