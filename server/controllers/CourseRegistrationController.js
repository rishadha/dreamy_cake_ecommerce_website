const express = require('express');
const app = express();
const mongoose = require('mongoose');
const courseData = require('../models/CourseRegistrationModel');
import axios from 'axios';
// mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });



// const CourseRegistrationModel = mongoose.model('CourseRegistrationModel', courseData);

// app.post('/api/courseData', (req, res) => {
exports.createCourseRegister = catchAsyncErrors(async (req,res,next) =>{
  const { firstname,
    lastname,
    email,
    address,
    phonenumber,
    course } = req.body;

  if (!firstname || !email|| !lastname || !address|| !phonenumber||!course) {
    return res.status(400).send('please fill all the data');
  }

  const submitedCourse = await course.create({
    firstname,
    email,
    lastname,
    address,
    phonenumber,
    course
});

res.status(201).json({
  success: true,
  submitedCourse
});

  // const newData = new MyModel({
  //   name,
  //   email
  // });

  // newData.save((err) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send('An error occurred while saving the data.');
  //   }
  //   return res.status(201).send('Data saved successfully!');
  // });

//   app.use(require("../models/CourseRegistrationModel"));
//   courseSchema.save((err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('An error occurred while saving the data.');
//     }
//     return res.status(201).send('Data saved successfully!');
  });

//   exports.createCourse=catchAsyncErrors(async(req,res,next)=>{
    
// });

