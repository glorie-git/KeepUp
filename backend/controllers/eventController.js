const mongoose = require("mongoose");
const Event = require("../models/eventModel");

// Create new event
const createEvent = async (req, res) => {
  const { title, date, time, tag } = req.body;
  try {
    const event = await Event.create({ title, date, time, tag });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an event

// Get an event
const getEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.find({ _id: id });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEvent,
};
