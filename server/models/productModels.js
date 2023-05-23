const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter a name of a product"],
        trim: true,
        maxLength:[20, "Product name not exceed than 20 characters"]
    },
    description:{
        type:String,
        required:[true, "Please add a description of your product"],
        maxlength:[4000,"Description is can not exceed than 4000 characters"]
    },
    price:{
        type:Number,
        required: [true, "Please add a price for your product"],
        maxLength:[8, "Price can not exceed than 8 characters"],
    },
    weight:{
        type: String,
        required:[true,"Please add the weight for your product"],
        maxLength: [8, "Stock can not exceed than 3 characters"],
    },
  user:{
      type: mongoose.Schema.ObjectId,
      ref:"User",
    //   required: true
  },
  createAt:{
      type:Date,
      default: Date.now()
  }
})

module.exports = mongoose.model("Product",productSchema);