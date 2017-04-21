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

    function processNextRideItem(ride_type,i, rideItems, resolvedContents, callback) {
        // Asynchronously resolve a feed item.
      if (rideItems.length === 0) {
          callback(null, []);
      } else {
        getRideItem(ride_type,rideItems[i], function(err, rideItem) {
            if (err) {
                // Pass an error to the callback.
                callback(err);
            } else {
                // Success!
                // console.log(feedItem);
                resolvedContents.push(rideItem);
                if (resolvedContents.length === rideItems.length) {
                    // I am the final feed item; all others are resolved.
                    // Pass the resolved feed document back to the callback.
                    // console.log("==========>"+resolvedContents);
                    callback(null, resolvedContents);
                } else {
                    // Process the next feed item.
                    processNextRideItem(ride_type,i + 1, rideItems, resolvedContents, callback);
                }
              }
            });
          }
        }

    function getRideItem(ride_type,rideItemId, callback) {
      db.collection(ride_type).findOne({
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
      // post a ride request
      app.post('/ride/:user_id', validate({
          body: RideSchema
      }),function(req, res) {
        const body = req.body;
        var user_id = req.params.user_id;
        var newPendingRide = {
          "pickupTime":body.pickupTime,
          "pickupDate":body.pickupDate,
          "isConfirmed":body.isConfirmed,
          "dropoff":body.dropoff,
          "pickup":body.pickup,
          "van":-1,
          "user":new ObjectID(user_id)
        }
        db.collection('pendingRides').insertOne(newPendingRide,function (err,result){
          if (err) {
            res.status(401).end();
          } else {
            newPendingRide._id = result.insertedId;
            db.collection('users').updateOne( {_id:new ObjectID(user_id)},
              {
                $push:{
                  pendingRides:result.insertedId
                }
              },function(err,result) {
                // console.log(result);
                if (err) {
                  res.status(401).end();
                } else {
                  res.status(200).send(newPendingRide);
                }
              })
          }
        })
      });

      // get ride data
      app.get('/ride/:user_id/:ride_type',function(req,res) {
        var user_id = req.params.user_id;
        var ride_type = req.params.ride_type;
        // console.log("Getting data for user "+user_id);
        db.collection('users').findOne(
          {_id:new ObjectID(user_id)}, function(err,userData) {
            if (err) {
              console.log("This is an error why getting user data");
              res.status(401).end();
            } else {
              // console.log("ride type is " + ride_type);
              var ride_data;
              if (ride_type == "confirmedRides") {
                ride_data = userData.confirmedRides;
              } else if (ride_type == "pendingRides") {
                ride_data = userData.pendingRides;
              } else {
                ride_data = userData.previousRides;
              }
              processNextRideItem(ride_type,0,ride_data, [], function(err,resolvedContents) {
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

      app.get('/location',function(req,res) {
        db.collection('locations').find(function(err,rideData) {
          if (err) {
            res.status(401).end();
          }else {
            rideData.toArray(function(err,rideDataArray) {
              if (err) {
                res.status(401).end();
              } else {
                res.status(200).send(rideDataArray);
              }
            });
          }
        });
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
