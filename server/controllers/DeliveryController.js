const express = require('express');
const Delivery = require("../models/DeliveryModel"); // update with the actual path to your model

// Create and Save a new Delivery
exports.create = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
      message: "Delivery content cannot be empty"
    });
  }

  // Create a Delivery
  const delivery = new Delivery({
    name: req.body.name,
    address: req.body.address,
    district: req.body.district,
    postalcode: req.body.postalcode,
    phonenumber: req.body.phonenumber
  });

  // Save Delivery in the database
  delivery.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Delivery."
    });
  });
};

// Retrieve and return all deliveries from the database.
exports.findAll = (req, res) => {
  Delivery.find()
  .then(deliveries => {
    res.send(deliveries);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving deliveries."
    });
  });
};

// Find a single delivery with a deliveryId
exports.findOne = (req, res) => {
  Delivery.findById(req.params.deliveryId)
  .then(delivery => {
    if(!delivery) {
      return res.status(404).send({
        message: "Delivery not found with id " + req.params.deliveryId
      });            
    }
    res.send(delivery);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Delivery not found with id " + req.params.deliveryId
      });                
    }
    return res.status(500).send({
      message: "Error retrieving delivery with id " + req.params.deliveryId
    });
  });
};
