const Product = require("../models/productModels");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors =require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");
const productModels = require("../models/productModels");

//create product - Admin 
exports.createProduct=catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
});

//gel All product 
exports.getProducts = catchAsyncErrors(async(req,res,)=>{
    
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();

    const feature = new Features(products.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
    ;
    const products = await feature.query;
    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage
    })
});

//update product --Admin
exports.updateProducts = catchAsyncErrors(async(req,res,next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("product is not found with this id",404));
    }
    product= await Product.findById(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useUniFied:false
    });
    res.status(200).json({
            success: true,
            product
    })
});

//delete product
exports.deleteProducts = catchAsyncErrors(async(req,res,next)=>{
    const product= await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("product is not found with this id",404));
    }
    product= await Product.remove();

    res.status(200).json({
        success: true,
        message:"product deleted successfully"
    })
});

//single product details
exports.getSingleProducts = catchAsyncErrors(async(req,res,)=>{
    const product= await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("product is not found with this id",404));
    }

    res.status(200).json({
        success: true,
        product,
        productsCount
    })
});

// Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
  
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };
  
    const product = await Product.findById(productId);
  
    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }
  
    let avg = 0;
  
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    product.ratings = avg / product.reviews.length;
  
    await product.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  });

  // Get All reviews of a single product
exports.getSingleProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
  
    if (!product) {
      return next(new ErrorHandler("Product is not found with this id", 404));
    }
  
    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  });

  // Delete Review --Admin
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
  
    if (!product) {
      return next(new ErrorHandler("Product not found with this id", 404));
    }
  
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );
  
    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    let ratings = 0;
  
    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
  
    const numOfReviews = reviews.length;
  
    await Product.findByIdAndUpdate(
      req.query.productId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  
    res.status(200).json({
      success: true,
    });
  });
