require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT;
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Get method called" });
});

app.post("/", (req, res) => {
  res.json({ msg: "Post method called" });
});

app.delete("/", (req, res) => {
  res.json({ msg: "Delete method called" });
});

app.patch("/", (req, res) => {
  res.json({ msg: "Patch method called" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
