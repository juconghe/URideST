//import express module
var express = require('express');
//import JSON body parser
var bodyParser = require('body-parser');
//import database functions
var mongo_express = require('mongo-express/lib/middleware');
var ResetDatabase = require('./resetdatabase');
var mongo_express_config = require('mongo-express/config.default.js');
var validate = require('express-jsonschema').validate;
var app = express();
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/exser';
var categoryMap = {
        "Computer Science": "000000000000000000000001",
        "Math": "000000000000000000000002",
        "Music": "000000000000000000000003",
        "History": "000000000000000000000004",
        "Physics": "000000000000000000000005",
        "English": "000000000000000000000006",
        "Pet Related": "000000000000000000000007",
        "Home Improvement": "000000000000000000000008",
        "Travel": "000000000000000000000009",
        "Yard": "0000000000000000000000010",
        "Plumer": "000000000000000000000011",
        "Car Pool": "000000000000000000000012"
    }
    // listening on port 3000
    // Implement your server in this file.
    // We should be able to run your server with node src/server.js

MongoClient.connect(url, function(err, db) {
    app.use(bodyParser.text());
    app.use(bodyParser.json());
    app.use(express.static('../client/build'));
    app.use('/mongo_express', mongo_express(mongo_express_config));

    app.post('/ride', function(req, res) {
        console.log(req.body);
        res.status(201).send({serverdata:"Server received data"});
    });

    app.get('/ride/:user_id',function(req,res) {
      var user_id = req.params.user_id;
      console.log("Getting data for user "+user_id);
        const rideData =[
          {
          _id:1,
          pickupTime:"11:00 AM - 11:15 AM",
          pickupDate:"Tuesday, March 19, 2017",
          isConfirmed:true,
          dropoff:"LGRC",
          pickup:"FAC",
          van:20,
          user:"Jucong"
        },
        {
        _id:2,
        pickupTime:"11:00 AM - 11:15 AM",
        pickupDate:"Tuesday, March 19, 2017",
        isConfirmed:true,
        dropoff:"LGRC",
        pickup:"FAC",
        van:20,
        user:"Jucong"
        },
        {
        _id:3,
        pickupTime:"11:00 AM - 11:15 AM",
        pickupDate:"Tuesday, March 19, 2017",
        isConfirmed:true,
        dropoff:"LGRC",
        pickup:"FAC",
        van:20,
        user:"Jucong"
        },
        {
        _id:4,
        pickupTime:"11:00 AM - 11:15 AM",
        pickupDate:"Tuesday, March 19, 2017",
        isConfirmed:true,
        dropoff:"LGRC",
        pickup:"FAC",
        van:20,
        user:"Jucong"
        }]
        res.status(200).send(rideData);
    });
    /**
     * Translate JSON Schema Validation failures into error 400s.
     */
    app.use(function(err, req, res, next) {
        if (err.name === 'JsonSchemaValidation') {
            console.log(JSON.stringify(err));
            // Set a bad request http response status
            res.status(400).end();
        } else {
            // It's some other sort of error; pass it to next error middleware handler
            next(err);
        }
    });

    app.listen(3000, function() {
        console.log('Example app listening on port 3000');
    });
});
