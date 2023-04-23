const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//route imports
const products = require("./routes/product");
const user = require("./routes/UserRoute");
const order= require("./routes/OrderRoute");

app.use("/api/v2", products);

app.use("/api/v2", user);

app.use("/api/v2", order);


//its for error handling
app.use(ErrorHandler);

module.exports = app;
