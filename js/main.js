const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("It works fine!");
});

app.get("/test", (req, res) => {
  res.json("This page also works!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
