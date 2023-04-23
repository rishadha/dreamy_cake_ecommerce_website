const express = require("express");

const {
  getProducts,
  createProduct,
  updateProducts,
  deleteProducts,
  getSingleProducts,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("../routes/product.js").get(getProducts);
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("Admin"), createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("Admin"), updateProducts)
  .delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteProducts)
  .get(getSingleProducts);

router.route("/product/review").post(isAuthenticatedUser, createProductReview);
router
  .route("/reviews")
  .get(getSingleProductReviews)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);
  
module.exports = router;
