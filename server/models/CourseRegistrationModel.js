const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course: {
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    phonenumber: {
      type: Number,
      // required: true,
    },
    course:{
        type: String,
        enum: ['certificate course', 'diploma course', 'advance diploma course']
    }
}
});

module.exports = mongoose.model("course", courseSchema);
