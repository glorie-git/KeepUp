const eventRouter = require("express").Router();
const eventController = require("../controllers/eventController");

eventRouter.get("/", (req, res) => {
  eventController.getAllEvents(req, res);
});

eventRouter.get("/:id", (req, res) => {
  eventController.getEvent(req, res);
});

eventRouter.post("/", (req, res) => {
  eventController.createEvent(req, res);
});

eventRouter.delete("/:id", (req, res) => {
  eventController.deleteEvent(req, res);
});

eventRouter.patch("/:id", (req, res) => {
  res.json({ msg: "Patch method called" });
});

module.exports = eventRouter;
