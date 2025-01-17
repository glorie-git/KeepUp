const eventRouter = require("express").Router();

eventRouter.get("/", (req, res) => {
  res.json({ msg: "Get method called" });
});

eventRouter.get("/:id", (req, res) => {
  res.json({ msg: "Get method called" });
});

eventRouter.post("/", (req, res) => {
  console.log(req.body);
  res.json({ msg: "Post method called" });
});

eventRouter.delete("/:id", (req, res) => {
  res.json({ msg: "Delete method called" });
});

eventRouter.patch("/:id", (req, res) => {
  res.json({ msg: "Patch method called" });
});

module.exports = eventRouter;
