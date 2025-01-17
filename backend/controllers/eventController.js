const mongoose = require("mongoose");
const Event = require("../models/eventModel");

// Create new event
const createEvent = async (req, res) => {
  const { title, date, location, status, description } = req.body;
  try {
    const event = await Event.create({
      title,
      date,
      location,
      status,
      description,
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.deleteOne({ _id: id });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
  deleteEvent,
};
