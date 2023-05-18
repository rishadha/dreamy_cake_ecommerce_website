const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  delivery: {
    name: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    district: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    postalcode: {
      type: Number,
      // required: true,
    },
    phonenumber:{
        type: Number,
        
    }
}
});

module.exports = mongoose.model("delivery", courseSchema);
