var express = require('express');
var bodyParser = require('body-parser');
var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('mongo-express/config.default.js');
var validate = require('express-jsonschema').validate;
var app = express();
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var RideSchema = require('./schemas/rideSchema.json');
var url = 'mongodb://localhost:27017/URideST';
const Moment = require('moment');
    // listening on port 3000
    // Implement your server in this file.
    // We should be able to run your server with node src/server.js

MongoClient.connect(url, function(err, db) {
    app.use(bodyParser.text());
    app.use(bodyParser.json());
    app.use(express.static('../client/build'));
    app.use('/mongo_express', mongo_express(mongo_express_config));

    // post a ride request
    app.post('/ride/:user_id', validate({
        body: RideSchema
    }),function(req, res) {
        console.log(req.body);
        res.status(201).send({serverdata:"Server received data"});
    });

    // get ride data
    app.get('/ride/:user_id',function(req,res) {
      var user_id = req.params.user_id;
      console.log("Getting data for user "+user_id);
      db.collection('users').findOne(
        {_id:new ObjectID(user_id)}, function(err,userData) {
          if (err) {
            console.log("This is an error why getting user data");
            res.status(401).end();
          } else {
            processNextRideItem(0, userData.pendingRides, [], function(err,resolvedContents) {
                if (err) {
                  res.status(401).end();
                } else {
                  console.log(resolvedContents);
                  res.status(200).send(resolvedContents);
                }
            });
          }
      });
    });


    function processNextRideItem(i, rideItems, resolvedContents, callback) {
        // Asynchronously resolve a feed item.
      if (rideItems.length === 0) {
          callback(null, []);
      } else {
        getRideItem('pendingRides',rideItems[i], function(err, feedItem) {
            if (err) {
                // Pass an error to the callback.
                callback(err);
            } else {
                // Success!
                // console.log(feedItem);
                resolvedContents.push(feedItem);
                if (resolvedContents.length === rideItems.length) {
                    // I am the final feed item; all others are resolved.
                    // Pass the resolved feed document back to the callback.
                    callback(null, resolvedContents);
                } else {
                    // Process the next feed item.
                    processNextRideItem(i + 1, rideItems, resolvedContents, callback);
                }
              }
            });
          }
        }

    function getRideItem(rideType,rideItemId, callback) {
      db.collection(rideType).findOne({
          _id: rideItemId
      }, function(err, rideItem) {
          if (err) {
              return callback(err);
          } else if (rideItem === null) {
              return callback(null, null);
          } else {
            rideItem.pickupDate = Moment(rideItem.pickupDate).format("MM-DD-YYYY");
            return callback(null,rideItem);
          }
        });
      }

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
