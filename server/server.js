const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/CourseRegistrationRoute"));

// Handling uncaught Exception
process.on("uncaughtException",(err) =>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

// get driver connection
//const dbo = require("./db/conn");
 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection  successfully");
})

// app.get("/testing", (req, res) => {
//   res.status(200);
//   res.send([{id: 1, name: 'test name 01'}, {id: 2, name: 'test name 02'}])
// })


// app.use(require("./controllers/CourseRegistration"))
let server = app.listen(port, () => {

  // perform a database connectioosen when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);
 
  // });

  console.log(`Server is running on port: ${port}`);

});


//unhandled promise rejections  --(not work because my mongo db atlas not correctly connected)
process.on("unhandledRejection", (err) =>{
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  if (server) {
  server.close(() =>{
      process.exit(1);
  });
} else {
    process.exit(1);
  }  
});

