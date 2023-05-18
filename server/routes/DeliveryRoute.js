const express = require("express");

module.exports = function (connection) {
  const DeliveryRoute = express.Router();

  DeliveryRoute.route("/api/deliveryeData").post(async function (req, response) {
    let db_connect = connection;  
    let myobj = {
      name: req.body.name,
      address: req.body.address,
      district: req.body.district,
      postalcode: req.body.postalcode,
      phonenumber: req.body.phonenumber,
      
    };
    db_connect.collection("delivery").insertOne(myobj, function (err, res) {
      console.log('DB')
      if (err) throw err;
      response.json(res);
    });
  });

  return DeliveryRoute;
};
