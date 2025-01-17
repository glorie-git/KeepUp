require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;
const eventRouter = require("./routes/events");
const app = express();

// gives us access to request body
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/events", eventRouter);

mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to database & listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`There was an issue connecting to database. Error: ${error}`);
  });
