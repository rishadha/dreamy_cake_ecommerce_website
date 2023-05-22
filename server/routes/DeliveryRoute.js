const express = require("express");
const router = express.Router();
const deliveryController = require("../controllers/DeliveryController");

router.post("/", deliveryController.create);
router.get("/", deliveryController.findAll);
router.get("/:deliveryId", deliveryController.findOne);

module.exports = router;
