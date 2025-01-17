const eventRouter = require("express").Router();
const eventController = require("../controllers/eventController");

eventRouter.get("/", (req, res) => {
  eventController.getAllEvents(req, res);
});

eventRouter.get("/:id", (req, res) => {
  res.json({ msg: "Get method called" });
});

eventRouter.post("/", (req, res) => {
  eventController.createEvent(req, res);
});

eventRouter.delete("/:id", (req, res) => {
  res.json({ msg: "Delete method called" });
});

eventRouter.patch("/:id", (req, res) => {
  res.json({ msg: "Patch method called" });
});

module.exports = eventRouter;
