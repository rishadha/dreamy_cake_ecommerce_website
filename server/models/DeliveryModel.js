const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  district: {
    type: String,
  },
  postalcode: {
    type: Number,
  },
  phonenumber: {
    type: Number,
  }
});

module.exports = mongoose.model("Delivery", deliverySchema);
