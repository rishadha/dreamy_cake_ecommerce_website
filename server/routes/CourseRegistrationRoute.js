const express = require("express");

module.exports = function (connection) {
  const CourseRegistrationRoute = express.Router();

  CourseRegistrationRoute.route("/api/courseData").post(async function (req, response) {
    let db_connect = connection;  
    let myobj = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
      course: req.body.course,
    };
    db_connect.collection("enrolledStudent").insertOne(myobj, function (err, res) {
      console.log('DB')
      if (err) throw err;
      response.json(res);
    });
  });

  return CourseRegistrationRoute;
};
