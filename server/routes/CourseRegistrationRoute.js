const express = require("express");
const CourseRegistrationRoute = express.Router();
// const db = require("../db/conn");

// const {
//   getFirstname,
//   getLastname,
//   getEmail,
//   getAddress,
//   getPhonenumber,
//   getCourse,
// } = require("../controller/CourseRegistrtion");
// const { isAuthenticatedUser } = require("../middleware/auth");
// const router = express.Router();

// router.route("/api/courseData").post(isAuthenticatedUser, getFirstname);

function getDb() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, options, (err, client) => {
      if (err) reject(err);
      const db = client.db('dreamycake');
      resolve(db);
    });
  });
}


CourseRegistrationRoute.route("/api/courseData").post(async function (req, response) {
  // let db_connect = conn.getDb();
  const db = await getDb();
  
  let myobj = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
    course: req.body.course,
  };
  db.collection("enrolledStudent").insertOne(myobj, function (err, res) {
    console.log('DB')
    if (err) throw err;
    response.json(res);
  });
 });

module.exports = CourseRegistrationRoute;