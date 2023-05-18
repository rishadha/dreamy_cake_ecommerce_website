const express = require('express');
const app = express();
const mongoose = require('mongoose');
const courseData = require('../models/CourseRegistrationModel');
import axios from 'axios';
import DeliveryForm from '../../dreamy_client/pages/page-creditcard';
// mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });



// const CourseRegistrationModel = mongoose.model('CourseRegistrationModel', courseData);

// app.post('/api/courseData', (req, res) => {
exports.createCourseRegister = catchAsyncErrors(async (req,res,next) =>{
  const {  name,
    address,
    district,
    postalcode,
    phonenumber } = req.body;

  if (!name|| !address|| !district || !postalcode|| !phonenumber) {
    return res.status(400).send('please fill all the data');
  }

  const submiteddelivery= await DeliveryForm.create({
    name,
    address,
    district,
    postalcode,
    phonenumber
    
});

res.status(201).json({
  success: true,
  submiteddelivery
});

  
  });



