const { MongoClient } = require('mongodb');
const { ConnectionString } = require('mongodb-connection-string-url');

console.log('ATLAS_URI:', process.env.ATLAS_URI="mongodb+srv://first1234:First1234@dreamycake.hdso7lx.mongodb.net/test");

const conn = new ConnectionString(process.env.ATLAS_URI);
const client = new MongoClient(conn.toString({
  useNewUrlParser: true,
  useUnifiedTopology: true,}));

var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db();
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return db;
  },
};

const mongoose = require("mongoose");


const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) =>{
        console.log(`mongodb is connected with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase



// const { MongoClient } = require("mongodb");

// // Connection URI for MongoDB Atlas
// const uri =
//   "mongodb+srv://first1234:First1234@dreamycake.hdso7lx.mongodb.net/test";

// // Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Connect to the MongoDB Atlas cluster
// client.connect((err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Get the database object
//   const db = client.db("dreamy_cake");

//   // Use the database object to perform operations
//   const collection = db.collection("enrolledStudent");
//   collection.insertOne({ key: "value" }, (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(result);
//   });

//   // Close the connection when finished
//   client.close();
// });