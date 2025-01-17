const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const date = new Date();
const eventSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      trim: true,
    },
    description: {
      required: false,
      type: String,
      trim: true,
    },
    location: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: Date,
    },
    status: {
      type: String,
      required: false,
      enum: ["active", "cancelled", "completed"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
