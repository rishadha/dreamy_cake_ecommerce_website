const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

// Import user routes
const userRoutes = require("./routes/UserRoute");

// Add user routes to the application
app.use("/api", userRoutes);


app.use(require("./routes/record"));

const CourseRegistrationRoute = require("./routes/CourseRegistrationRoute");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection successfully");

  // Add the following line after the successful connection:
  app.use(CourseRegistrationRoute(connection));
});

let server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
