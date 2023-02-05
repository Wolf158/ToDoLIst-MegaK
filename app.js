const express = require("express");
const { writeFile, readFile } = require("fs").promises;
const cors = require("cors");
const pathData = "./data/data.json";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./Public"));
const array = [];

app.post("/todos", async (req, res) => {
  array.push(req.body);
  await writeFile(pathData, `${JSON.stringify(array)}`, {
    encoding: "utf8",
  });
  res.status(200).end();
});
app.get("/todos", async (req, res) => {
  let file = JSON.parse(await readFile("./data/data.json", "utf-8"));
  console.log(file);
});
app.listen(3000);
