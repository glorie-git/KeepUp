const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const date = new Date();
const eventSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
      // type: Date,
      // min: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
    },
    time: {
      required: true,
      type: String,
    },
    tag: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
