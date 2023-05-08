const express = require("express");

module.exports = function (connection) {
  const CourseRegistrationRoute = express.Router();
//post route to add a ew entrolled student
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
   // GET route to fetch all the enrolled student data
   CourseRegistrationRoute.route("/api/courseData").get(async function (req, res) {
    let db_connect = connection;
    db_connect
      .collection("enrolledStudent")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        // console.log("Enrolled student data fetched from the database");
        res.json(result);
      });
  });
//delete
CourseRegistrationRoute.route("/api/courseData/:firstname").delete(async function (req, res) {
  let db_connect = connection;
  let firstname = req.params.firstname;
  db_connect
    .collection("enrolledStudent")
    .deleteOne({ firstname:firstname }, function (err, result) {
      if (err) throw err;
      if (result.deletedCount === 0) {
        res.status(404).send("name not found");
      } else {
        res.send(`Course ${firstname} deleted successfully`);
      }
    });
});



 //edit route
 CourseRegistrationRoute.route("/api/courseData")
 .get(async function (req, res) {
   let db_connect = connection;

   if (req.query.id) {
     // If an ID query parameter is provided, return data for a specific student
     db_connect
       .collection("enrolledStudent")
       .findOne({ _id: ObjectId(req.query.id) }, function (err, result) {
         if (err) throw err;
         console.log(`Enrolled student with ID ${req.query.id} fetched from the database`);
         res.json(result);
       });
   } else {
     // If no ID query parameter is provided, return all enrolled student data
     db_connect
       .collection("enrolledStudent")
       .find({})
       .toArray(function (err, result) {
         if (err) throw err;
         console.log("Enrolled student data fetched from the database");
         res.json(result);
       });
   }
 });


  return CourseRegistrationRoute;
};
