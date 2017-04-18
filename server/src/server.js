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

    /**
     * Get the user ID from a token. Returns -1 (an invalid ID)
     * if it fails.
     */
    // var token ="eyJpZCI6MX0=";
    function getUserIdFromToken(authorizationLine) {
        try {
            // Cut off "Bearer " from the header value.
            var token = authorizationLine.slice(7);
            // Convert the base64 string to a UTF-8 string.
            var regularString = new Buffer(token, 'base64').toString('utf8');
            // Convert the UTF-8 string into a JavaScript object.
            var tokenObj = JSON.parse(regularString);
            var id = tokenObj['id'];
            // Check that id is a number.
            if (typeof id === 'string') {
                return id;
            } else {
                // Not a number. Return -1, an invalid ID.
                return "";
            }
        } catch (e) {
            // Return an invalid ID.
            return "";
        }
    }

    function getFeedItem(feedItemId, callback) {
        db.collection('feedItems').findOne({
            _id: feedItemId
        }, function(err, feedItem) {
            if (err) {
                return callback(err);
            } else if (feedItem === null) {
                return callback(null, null);
            }

            var userList = [feedItem.contents.author];
            userList = userList.concat(feedItem.likeCounter);
            resolveUserObjects(userList, function(err, userMap) {
                if (err) {
                    callback(err);
                } else {
                    db.collection('servicetags').findOne({
                            _id: new ObjectID(feedItem.tag)
                        },
                        function(err, tag) {
                            if (err) {
                                callback(err)
                            } else if (tag === null) {
                                callback(null, null);
                            } else {
                                feedItem.likeCounter = feedItem.likeCounter.map((id) => userMap[id]);
                                feedItem.contents.author = userMap[feedItem.contents.author];
                                feedItem.tag = tag
                                callback(null, feedItem);
                            }
                        });
                }
            });
        });
    }

    function getFeedData(user, type, callback) {
        // console.log("Get called");
        db.collection('users').findOne({
            _id: user
        }, function(err, userData) {
            // console.log(userData);
            if (err) {
                callback(err);
            } else if (userData === null) {
                callback(null, null);
            }

            if (type === 1) {
                db.collection('academicfeeds').findOne({
                        _id: userData.Academic_feed
                    },
                    function(err, feedData) {
                        if (err) {
                            // console.log("Error getting feed");
                            callback(err)
                        } else if (feedData === null) {
                            // console.log("Empty feed");
                            callback(null, null);
                        } else {
                            // console.log(feedData.list_of_feeditems);
                            processNextFeedItem(0, feedData.list_of_feeditems, [], function(err, resolvedContents) {
                                if (err) {
                                    callback(err);
                                } else {
                                    feedData.list_of_feeditems = resolvedContents;
                                    callback(null, feedData);
                                }
                            });
                        }
                    });
            } else {
                db.collection('servicefeeds').findOne({
                        _id: userData.Service_feed
                    },
                    function(err, feedData) {
                        console.log("Service_feed");
                        if (err) {
                            return callback(err)
                        } else if (feedData === null) {
                            return callback(null, null);
                        }
                        processNextFeedItem(0, feedData.list_of_feeditems, [], function(err, resolvedContents) {
                            if (err) {
                                return callback(err);
                            } else {
                                feedData.list_of_feeditems = resolvedContents;
                                // console.log(feedData);
                                return callback(null, feedData);
                            }
                        });
                    });
            }
        });
    }

    function processNextFeedItem(i, feedItems, resolvedContents, callback) {
        // Asynchronously resolve a feed item.
        if (feedItems.length === 0) {
            callback(null, []);
        } else {
            getFeedItem(feedItems[i], function(err, feedItem) {
                if (err) {
                    // Pass an error to the callback.
                    callback(err);
                } else {
                    // Success!
                    // console.log(feedItem);
                    resolvedContents.push(feedItem);
                    if (resolvedContents.length === feedItems.length) {
                        // I am the final feed item; all others are resolved.
                        // Pass the resolved feed document back to the callback.
                        callback(null, resolvedContents);
                    } else {
                        // Process the next feed item.
                        processNextFeedItem(i + 1, feedItems, resolvedContents, callback);
                    }
                }
            });
        }
    }

    function postStatusUpdate(user, tag, contents, imgUrl, request, type, callback) {
        var time = new Date().getTime();
        // console.log(tag);
        var newPost = {
                "view_count": 0,
                "likeCounter": [],
                // Taggs are by course_id
                "tag": new ObjectID(categoryMap[tag]),
                "list_of_comments": [],
                "contents": {
                    "author": new ObjectID(user),
                    "timestamp": time,
                    "request": request,
                    "contents": contents,
                    "imgUrl": imgUrl
                }
            }
            // console.log(contents);
            // console.log(newPost);
        db.collection('feedItems').insertOne(newPost, function(err, result) {
            if (err) {
                callback(err);
            } else {
                db.collection('users').findOne({
                        _id: new ObjectID(user)
                    },
                    function(err, user) {
                        if (err) {
                            callback(err);
                        } else if (user === null) {
                            callback(null, null);
                        } else {
                            if (type === 1) {
                                db.collection('academicfeeds').updateOne({
                                        _id: new ObjectID(user.Academic_feed)
                                    }, {
                                        $push: {
                                            list_of_feeditems: {
                                                $each: [result.insertedId],
                                                $position: 0
                                            }
                                        }
                                    },
                                    function(err) {
                                        if (err) {
                                            callback(err);
                                        } else {
                                            callback(null, newPost);
                                        }
                                    });
                            } else {
                                db.collection('servicefeeds').updateOne({
                                        _id: new ObjectID(user.Academic_feed)
                                    }, {
                                        $push: {
                                            list_of_feeditems: {
                                                $each: [result.insertedId],
                                                $position: 0
                                            }
                                        }
                                    },
                                    function(err) {
                                        if (err) {
                                            callback(err);
                                        } else {
                                            callback(null, newPost);
                                        }
                                    });
                            }
                        }
                    });
            }
        });
    }

    /**
     * Resolves a list of user objects. Returns an object that maps user IDs to
     * user objects.
     */
    function resolveUserObjects(userList, callback) {
        // Special case: userList is empty.
        // It would be invalid to query the database with a logical OR
        // query with an empty array.
        if (userList.length === 0) {
            callback(null, {});
        } else {
            // Build up a MongoDB "OR" query to resolve all of the user objects
            // in the userList.
            var query = {
                $or: userList.map((id) => {
                    return {
                        _id: id
                    }
                })
            };
            // Resolve 'like' counter
            db.collection('users').find(query).toArray(function(err, users) {
                if (err) {
                    return callback(err);
                }
                // Build a map from ID to user object.
                // (so userMap["4"] will give the user with ID 4)
                var userMap = {};
                users.forEach((user) => {
                    userMap[user._id] = user;
                });
                callback(null, userMap);
            });
        }
    }
    /**
     * Get the feed data for a particular user.
     1 is academic feed
     2 is Service feed
    */
    app.get('/user/:userid/feed/:feedtype', function(req, res) {
        var userid = req.params.userid;
        var feedType = parseInt(req.params.feedtype, 10);
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if (fromUser === userid) {
            // Send response.
            getFeedData(new ObjectID(userid), feedType, function(err, feedData) {
                // console.log(feedData);
                if (err) {
                    res.status(500).send("Database error: " + err);
                } else if (feedData === null) {
                    res.status(400).send("Could not look up feed for user " + userid);
                } else {
                    res.status(201).send(feedData);
                }
            })
        } else {
            // 401: Unauthorized request.
            res.status(401).end();
        }
    });

    // Post a feed
    app.post('/feeditem/:feeditemtype', validate({
    }), function(req, res) {
        console.log("Get post feeditem");
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var body = req.body;
        if (body.author === fromUser) {
            var feedItemType = parseInt(req.params.feeditemtype, 10);
            postStatusUpdate(body.author, body.category, body.contents,
                body.imgUrl, body.request, feedItemType,
                function(err, newPost) {
                    if (err) {
                        res.status(500).send("Database error: " + err);
                    } else {
                        res.status(201);
                        res.set('Location', '/feeditem/' + newPost._id);
                        // console.log(newPost);
                        res.send(newPost);
                    }
                });
        } else {
            res.status(401).end();
        }
    });

    //Rest database.
    app.post('/resetdb', function(req, res) {
        console.log("Resetting database");
        ResetDatabase(db, function() {
            res.send();
        });
    });

    // Like a feed
    app.put('/feeditem/:feeditemid/likelist/:userid', function(req, res) {
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var feedItemId = new ObjectID(req.params.feeditemid);
        var userId = req.params.userid;
        if (fromUser === userId) {
            db.collection('feedItems').updateOne({
                _id: feedItemId
            }, {
                $push: {
                    likeCounter: {
                        $each: [new ObjectID(userId)],
                        $position: 0
                    }
                }
            }, function(err) {
                if (err) {
                    res.status(500).send("Database error: " + err);
                } else {
                    getFeedItem(feedItemId, function(err, feedItem) {
                        if (err) {
                            res.status(500).send("Database error: " + err);
                        } else {
                            res.status(201).send(feedItem.likeCounter);
                        }
                    })
                }
            });
        } else {
            res.status(401).end();
        }
    });

    // Unlike a feed
    app.delete('/feeditem/:feeditemid/likelist/:userid', function(req, res) {
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var feedItemId = new ObjectID(req.params.feeditemid);
        var userId = req.params.userid;
        if (fromUser === userId) {
            db.collection('feedItems').updateOne({
                _id: feedItemId
            }, {
                $pull: {
                    likeCounter: new ObjectID(userId)
                }
            }, function(err) {
                if (err) {
                    res.status(500).send("Database error: " + err);
                } else {
                    getFeedItem(feedItemId, function(err, feedItem) {
                        if (err) {
                            res.status(500).send("Database error: " + err);
                        } else {
                            res.status(201).send(feedItem.likeCounter);
                        }
                    });
                }
            });
        } else {
            res.status(401).end();
        }
    });

    // Search for feed item
    app.post('/search', function(req, res) {
        var fromUser = new ObjectID(getUserIdFromToken(req.get('Authorization')));
        var queryText = req.body;
        console.log(queryText);
        if (typeof(req.body) === 'string') {
            db.collection('feedItems').find({
                $or: [{
                    "contents.request": queryText
                }, {
                    "contents.contents": queryText
                }]
            }).toArray(
                function(err, feedItems) {
                    if (err) {
                        console.log("error occurred");
                    } else {
                        var size = feedItems.length;
                        var resolvedFeedItems = [];
                        feedItems.forEach((feedItem) => {
                            console.log("logging feeditem");
                            console.log("logging feeditem:" + feedItem);
                            var userList = [feedItem.contents.author];
                            userList = userList.concat(feedItem.likeCounter);
                            resolveUserObjects(userList, function(err, userMap) {
                                if (err) {
                                    res.status(500).send("Database error: " + err);
                                } else {
                                    db.collection('servicetags').findOne({
                                            _id: new ObjectID(feedItem.tag)
                                        },
                                        function(err, tag) {
                                            if (err) {
                                                res.status(500).send("Database error: " + err);
                                            } else {
                                                feedItem.likeCounter = feedItem.likeCounter.map((id) => userMap[id]);
                                                feedItem.contents.author = userMap[feedItem.contents.author];
                                                feedItem.tag = tag
                                                resolvedFeedItems.push(feedItem);
                                                if (resolvedFeedItems.length === size) {
                                                    console.log(resolvedFeedItems);
                                                    res.status(201).send(resolvedFeedItems);
                                                }
                                            }
                                        });
                                }
                            });
                        });
                    }
                }
            )
        } else {
            // 400: Bad Request.
            res.status(400).end();
        }
    });

    function deleteFeed(userId, feedItemId, type, callback) {
        // console.log(feedItemId);
        db.collection('feedItems').findOne({
                _id: feedItemId
            },
            function(err, feedItem) {
                if (err) {
                    callback(err);
                } else if (feedItem == null) {
                    callback(null, null);
                } else {
                    // console.log(feedItem.contents.author);
                    // console.log(userId);
                    if (feedItem.contents.author.equals(userId)) {
                        db.collection('feedItems').remove({
                                _id: feedItemId
                            },
                            function(err) {
                                if (err) {
                                    callback(err);
                                } else {
                                    db.collection(type).updateMany({
                                            list_of_feeditems: feedItemId
                                        }, {
                                            $pull: {
                                                list_of_feeditems: feedItemId
                                            }
                                        },
                                        function(err) {
                                            if (err) {
                                                callback(err);
                                            } else {
                                                callback(null, feedItem)
                                            }
                                        });
                                }
                            });
                    } else {
                        console.log("I am not the author");
                        db.collection(type).updateOne({
                                _id: userId
                            }, {
                                $pull: {
                                    list_of_feeditems: feedItemId
                                }
                            },
                            function(err) {
                                if (err) {
                                    callback(err);
                                } else {
                                    callback(null, feedItem)
                                }
                            });
                    }
                }
            });
    }
    // Delete a feed
    // If the user is the author of that feed remove it from feedItem otherwise just
    // remove the reference
    app.delete('/user/:userid/feed/:feedtype/:feeditemid', function(req, res) {
        console.log("Delete called");
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var userId = req.params.userid;
        var feedItemId = new ObjectID(req.params.feeditemid);
        var type = parseInt(req.params.feedtype, 10);
        if (fromUser === userId) {
            if (type === 1) {
                deleteFeed(new ObjectID(userId), feedItemId, "academicfeeds",
                    function(err, result) {
                        if (err) {
                            console.log("error !!");
                            res.status(500).send("Database error: " + err);
                        } else if (result === null) {
                            console.log("result is null");
                            res.status(400).send("Could not find feed: " + result);
                        } else {
                            console.log("Sending result back");
                            res.status(201).send(result);
                        }
                    });
            } else {
                deleteFeed(new ObjectID(userId), feedItemId, "servicefeeds",
                    function(err, result) {
                        if (err) {
                            res.status(500).send("Database error: " + err);
                        } else if (result === null) {
                            res.status(400).send("Could not find feed: " + result);
                        } else {
                            res.status(201).send(result);
                        }
                    });
            }
        } else {
            res.status(401).end();
        }
    });

    /**
      Begin Message Page.
    **/

    // Get the user's short profile.
    function getShortProfiles(list_userId, callback) {
        // Special case: userList is empty.
        // It would be invalid to query the database with a logical OR
        // query with an empty array.
        if (list_userId.length === 0) {
            callback(null, {});
        } else {
            // Build up a MongoDB "OR" query to resolve all of the user objects
            // in the userList.
            var query = {
                $or: list_userId.map((id) => {
                    return {
                        _id: new ObjectID(id)
                    }
                })
            };
            db.collection('users').find(query).toArray(function(err, users) {
                if (err) {
                    return callback(err);
                }
                // Build a map from ID to user object.
                // (so userMap["4"] will give the user with ID 4)
                var profiles = users.map((user) => {
                    var profile = {
                        user_id: user._id,
                        username: user.username,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        profilepic: user.profilepic
                    };
                    return profile;
                });
                callback(null, profiles);
            });
        }
    }
    // Increase view count
    // authorization is done in get feed data
    app.put('/feeditem/:feeditemid', function(req, res) {
        var feedItemId = new ObjectID(req.params.feeditemid);
        db.collection('feedItems').updateOne({
            _id: feedItemId
        }, {
            $inc: {
                view_count: 1
            }
        }, function(err) {
            if (err) {
                res.status(500).send("Database error: " + err);
            } else {
                db.collection('feedItems').findOne({
                    _id: feedItemId
                }, function(err, feedItem) {
                    if (err) {
                        res.status(500).send("Database error: " + err);
                    } else {
                        res.status(201).send(JSON.stringify(feedItem.view_count));
                    }
                });
            }
        });
    });
    //------------------------------------------------------------
    // Handle getParticipantProfiles
    app.get('/messagebox/:box_msg_id/participantlist', function(req, res) {
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var box_msg_id = req.params.box_msg_id;
        // console.log(box_msg_id);
        db.collection('messageboxes').findOne({
            _id: new ObjectID(box_msg_id)
        }, (err, messageBox) => {
            if (err) {
                res.status(500).end();
            }
            // console.log('getParticipantProfiles');
            // console.log(messageBox);
            var participantList = messageBox.list_of_users.map((id) => {
                return id.toString();
            });
            // The requesting user is in the participant list, which should be allowed.
            if (participantList.indexOf(fromUser) !== -1) {
                getShortProfiles(participantList, (err, profiles) => {
                    // console.log(profiles);
                    res.send(profiles);
                });
            } else {
                res.status(401).end();
            }
        });
    });

    // Handle getMessageBoxServer.
    app.get('/messagebox/:box_msg_id', function(req, res) {
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var box_msg_id = req.params.box_msg_id;
        db.collection('messageboxes').findOne({
            _id: new ObjectID(box_msg_id)
        }, (err, messageBox) => {
            if (err) {
                res.status(500).end();
            } else {
                // console.log(messageBox);
                if (messageBox.list_of_users.map((user) => {
                        return user.toString();
                    }).indexOf(fromUser) !== -1) {
                    res.send(messageBox);
                } else {
                    res.status(401).end();
                }
            }
        });
    });


    // Handle sendMessageServer from client.
    app.post('/messagebox/:box_msg_id/send/:user_id', validate({
    }), function(req, res) {
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        // Get the current time.
        var time = new Date().getTime();
        var user_id = req.params.user_id;
        var box_msg_id = req.params.box_msg_id;
        db.collection('messageboxes').findOne({
            _id: new ObjectID(box_msg_id)
        }, (err, messageBox) => {
            var content = req.body.content;
            // Check if the user is already in the conversation.
            if (messageBox.list_of_users.map((user_id) => {
                    return user_id.toString();
                }).indexOf(fromUser) !== -1 &&
                user_id === fromUser) {
                var sent_msg = {
                    'user_id': user_id,
                    'timestamp': time,
                    'content': content
                };
                // Push the message into the conversation box.
                db.collection('messageboxes').updateOne({
                    _id: new ObjectID(box_msg_id)
                }, {
                    $push: {
                        list_of_messages_by_users_in_box: sent_msg
                    }
                }, (err, result) => {
                    db.collection('messageboxes').findOne({
                        _id: new ObjectID(box_msg_id)
                    }, (err, messageBox) => {
                        res.send(messageBox);
                    });
                });
            } else {
                res.status(401).end();
            }
        });

    });


    // Handle getRecentMessageBoxes from client.
    app.get('/users/:userid/recentmsgboxes/:numberofboxes', function(req, res) {
        var userInToken = getUserIdFromToken(req.get('Authorization'));
        var userId = req.params.userid;
        var numberOfBoxes = parseInt(req.params.numberofboxes, 10);
        if (userInToken === userId) {
            db.collection('users').findOne({
                _id: new ObjectID(userId)
            }, (err, user) => {
                // Get the last numberOfBoxes in the messageboxes.
                var reversedMsgBoxes = user.messageboxes;
                var recentBoxIds = reversedMsgBoxes.reverse().slice(0, numberOfBoxes);
                // console.log(recentBoxIds);
                res.send(recentBoxIds);
            });
        } else {
            res.status(401).end();
        }
    });

    // Handle createMessageBox from client.
    app.put('/messagebox/create/:user_id', function(req, res) {
        var userInToken = getUserIdFromToken(req.get('Authorization'));
        var userId = req.params.user_id;
        if (userInToken === userId) {
            // Get the current time.
            var time = new Date().getTime();
            // Create a message box.
            var messageBox = {
                'list_of_users': [],
                'list_of_messages_by_users_in_box': [],
                'creation_timestamp': time
            }
            messageBox.list_of_users.push(userId);
            db.collection('messageboxes').insertOne(messageBox, (err, result) => {
                messageBox._id = result.insertedId;
                db.collection('users').updateOne({
                    _id: new ObjectID(userId)
                }, {
                    $push: {
                        messageboxes: messageBox._id
                    }
                }, (err, result) => {
                    // console.log(messageBox);
                    res.send(messageBox);
                });
            });
        } else {
            res.status(401).end();
        }

    });

    // Handle joinMessageBox from client.
    app.put('/messagebox/:box_msg_id/add/:user_id', function(req, res) {
        var userInToken = getUserIdFromToken(req.get('Authorization'));
        var userId = req.params.user_id;
        var box_msg_id = req.params.box_msg_id;
        db.collection('messageboxes').findOne({
            _id: new ObjectID(box_msg_id)
        }, (err, messageBox) => {
            if (messageBox.list_of_users.indexOf(userInToken) !== -1) {
                // When the invited user is not already in the list of participants, we add him or her in.
                if (messageBox.list_of_users.indexOf(userId) === -1) {
                    db.collection('messageboxes').updateOne({
                        _id: new ObjectID(box_msg_id)
                    }, {
                        $push: {
                            list_of_users: new ObjectID(userId)
                        }
                    }, (err, result) => {
                        db.collection('users').updateOne({
                            _id: new ObjectID(userId)
                        }, {
                            $push: {
                                messageboxes: new ObjectID(box_msg_id)
                            }
                        }, (err, result) => {
                            db.collection('messageboxes').findOne({
                                _id: new ObjectID(box_msg_id)
                            }, (err, messageBox) => {
                                res.send(messageBox);
                            });
                        });
                    });
                } else {
                    res.send(messageBox);
                }
            } else {
                res.status(401).end();
            }
        });
    });

    //schedule part ------------

    function addScheule(userId, user, time, subscriber, date, serviceContents, callback) {
        var newScheduleItem = {
                "completed": "COMPLETED",
                "contents": {
                    "author": user,
                    "time": time,
                    "subscriber": serviceContents,
                    "date": subscriber,
                    "serviceContents": date
                }
            }
            //console.log(newPost);
        db.collection('schedules').insertOne(newScheduleItem, function(err, result) {
            if (err) {
                return callback(err);
            }
            newScheduleItem._id = result.insertedId;
            //  console.log(newScheduleItem._id);
            if (err) {
                return callback(err);
            }
            db.collection('users').updateOne({
                    _id: userId
                }, {
                    $push: {
                        schedules: {
                            $each: [newScheduleItem._id],
                            $position: 0
                        }
                    }
                },
                function(err) {
                    if (err) {
                        return callback(err);
                    }
                    // Return the new status update to the application.
                    callback(null, newScheduleItem);
                }
            );
        });
    }

    function resolveScheduleObject(scheduleList, callback) {
        // Special case: userList is empty.
        // It would be invalid to query the database with a logical OR
        // query with an empty array.
        if (scheduleList.length === 0) {
            callback(null, {});
        } else {
            // Build up a MongoDB "OR" query to resolve all of the user objects
            // in the userList.
            var query = {
                $or: scheduleList.map((id) => {
                    return {
                        _id: id
                    }
                })
            };
            // Resolve 'like' counter
            db.collection('schedules').find(query).toArray(function(err, schedules) {
                if (err) {
                    return callback(err);
                }
                callback(null, schedules);
            });
        }
    }

    function getScheduleItem(scheduleId, cb) {
        db.collection('schedules').findOne({
            _id: new ObjectID(scheduleId)
        }, function(err, schedules) {
            if (err) {
                // An error occurred.
                console.log(err);
            } else {
                var scheduleData = {
                    //console.log(indexSchedule);
                    _id: new ObjectID(scheduleId),
                    completed: schedules.completed,
                    contents: {
                        // ID of the user that the appointment is with
                        author: schedules.contents.author,
                        subscriber: schedules.contents.subscriber,
                        date: schedules.contents.date,
                        time: schedules.contents.time,
                        serviceContents: schedules.contents.serviceContents
                    }
                };
                cb(scheduleData);
            }
        });
    }

    app.get('/schedule/:userid', function(req, res) {
        var userId = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if (fromUser === userId) {
            // send response
            // Get the User object with the id "user".
            db.collection('users').findOne({
                _id: new ObjectID(userId)
            }, function(err, userData) {
                if (err) {
                    console.log("error1");
                } else {
                    resolveScheduleObject(userData.schedules, function(err, scheduleData) {
                        //  console.log(scheduleData);
                        res.send(scheduleData);
                    })
                }
            });
        } else {
            res.status(401).end();
        }
    });

    app.post('/schedule', validate({
    }), function(req, res) {
        //  console.log("Get post scheduleItem");
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var body = req.body;
        // console.log('Server receives POST schedule :: ' + JSON.stringify(body));
        //console.log(fromUser);
        //  console.log(body.author);
        db.collection('users').findOne({
            _id: new ObjectID(fromUser)
        }, function(error, userObject) {
            if (err) {
                console.log(err);
            }
            console.log((body.author) == (userObject.first_name));
            if ((body.author) === (userObject.first_name)) {
                addScheule(new ObjectID(fromUser), body.author, body.time, body.subscriber,
                    body.date, body.serviceContents,
                    function(err, newUpdate) {
                        if (err) {
                            // A database error happened.
                            // 500: Internal error.
                            res.status(500).send("A database error occurred: " + err);
                        } else {
                            res.status(201);
                            res.send(newUpdate);
                            console.log(newUpdate);
                            //console.log(JSON.stringify(db.collection('schedules')));
                        }
                    });
            } else {
                res.status(401).end();
            }
        })
    });

    app.delete('/schedule/:userid/:scheduleid', function(req, res) {
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var scheduleId = new ObjectID(req.params.scheduleid);
        var userId = req.params.userid;
        if (fromUser === userId) {
            db.collection('users').updateMany({
                _id: new ObjectID(fromUser)
            }, {
                $pull: {
                    schedules: scheduleId
                }
            }, function(err) {
                if (err) {
                    //return sendDatabaseError(res, err);
                    console.log(err);
                }

                db.collection('schedules').deleteOne({
                    _id: scheduleId
                }, function(err) {
                    if (err) {
                        //return sendDatabaseError(res, err);
                        console.log(err);
                    }
                    res.send();
                });
            });
        }
    });

    function getUserData(user, callback) {
        //console.log("Get called");
        db.collection('users').findOne({
            _id: user
        }, function(err, userData) {
            if (err) {
                callback(err);
            } else if (userData === null) {
                //user not found
                callback(null, null);
            } else {
                callback(null, userData);
            }
        });
    }


    //display user profile for particular user
    app.get('/user/:userid/profile', function(req, res) {
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if (fromUser === userid) {
            getUserData(new ObjectID(userid), function(err, userData) {
                if (err) {
                    //database error
                    res.status(500).send("Database error: " + err);
                } else if (userData === null) {
                    //couldn't find user
                    res.status(400).send("Could not look up info for user " + userid);
                } else {
                    res.send(userData);
                }
            })
        } else {
            // Unauthorized request
            res.status(401).end();
        }
    });

    //update user profile
    app.put('/user/:userid/profile', validate({
    }), function(req, res) {
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var userData = req.body;
        var newUser = new ObjectID(userid);
        if (fromUser === userid) {
            db.collection('users').updateOne({
                _id: newUser
            }, {
                $set: {
                    academic_institution: userData.academic_institution,
                    education_level: userData.education_level,
                    favorite_quote: userData.favorite_quote,
                    classes_taken: userData.classes_taken,
                    profilepic: userData.profilepic
                }
            }, function(err) {
                if (err) {
                    res.status(500).send("Database error: " + err);
                } else {
                    res.status(201);
                    res.send(newUser);
                }
            });
        } else {
            // Unauthorized request
            res.status(401).end();
        }
    });

    app.put('/config/:userid', validate({
    }), function(req, res) {
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var userData = req.body;
        var newUser = new ObjectID(userid);
        if (fromUser === userid) {
            db.collection('users').updateOne({
                    _id: newUser
                }, {
                    $set: {
                        username: userData.username,
                        password: userData.password,
                        email: userData.email
                    }
                },
                function(err) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(201);
                        res.send(newUser);
                    }
                })
        } else {
            res.status(401).end();
        }
    });


    app.get('/config/:userid', function(req, res) {
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if (fromUser === userid) {
            db.collection('users').findOne({
                    _id: new ObjectID(userid)
                },
                function(err, userData) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(201);
                        res.send(userData);
                    }
                })
        } else {
            res.status(401).end();
        }
    });
    app.get('/comment/:commentid/:userid', function(req, res) {
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var commentId = new ObjectID(req.params.commentid);
        if (fromUser === userid) {
            db.collection('comments').findOne({
                    _id: commentId
                },
                function(err, comment) {
                    if (err) {
                        res.status(500).send("Database error: " + err);
                    } else if (comment === null) {
                        res.status(400).send("Could not found comment: " + commentId);
                    } else {
                        db.collection('users').findOne({
                            _id: new ObjectID(comment.author)
                        }, function(err, user) {
                            if (err) {
                                res.status(500).send("Database error: " + err);
                            } else if (user === null) {
                                res.status(400).send("Could not found user: " + comment.author);
                            } else {
                                comment.author = user
                                res.status(201);
                                res.send(comment);
                            }
                        });
                    }
                });
        } else {
            res.status(401).end();
        }
    });

    app.post('/feed/:feeditemid/comment/:userid', function(req, res) {
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var userId = req.params.userid;
        var feedItemId = req.params.feeditemid;
        var content = req.body;
        if (fromUser === userId) {
            var time = new Date().getTime();
            var newComment = {
                "author": new ObjectID(userId),
                "timestamp": time,
                "contents": content
            }
            db.collection('comments').insertOne(newComment, function(err, result) {
                if (err) {
                    res.status(500).send("Database error: " + err);
                } else {
                    newComment._id = result.insertedId;
                    db.collection('feedItems').updateOne({
                            _id: new ObjectID(feedItemId)
                        }, {
                            $push: {
                                list_of_comments: {
                                    $each: [newComment._id],
                                    $position: 0
                                }
                            }
                        },
                        function(err) {
                            if (err) {
                                console.log("Error!!!");
                                res.status(500).send("Database error: " + err);
                            } else {
                                db.collection('feedItems').findOne({
                                        _id: new ObjectID(feedItemId)
                                    },
                                    function(err, feedItem) {
                                        if (err) {
                                            res.status(500).send("Database error: " + err);
                                        } else if (feedItem === null) {
                                            res.status(400).send("Could not find feed item: " + feedItemId);
                                        } else {
                                            res.status(201).send(feedItem.list_of_comments);
                                        }
                                    })
                            }
                        });
                }
            });
        } else {
            res.status(401).end();
        }
    });

    app.get('/user/:userid/requests', function(req, res) {
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        var userId = req.params.userid;
        if (fromUser === userId) {
            db.collection('feedItems').find({
                "contents.author": new ObjectID(userId)
            }).toArray(function(err, feedItems) {
                var size = feedItems.length;
                var resolvedFeedItems = [];
                feedItems.forEach((feedItem) => {
                    var userList = [feedItem.contents.author];
                    userList = userList.concat(feedItem.likeCounter);
                    resolveUserObjects(userList, function(err, userMap) {
                        if (err) {
                            res.status(500).send("Database error: " + err);
                        } else {
                            db.collection('servicetags').findOne({
                                    _id: new ObjectID(feedItem.tag)
                                },
                                function(err, tag) {
                                    if (err) {
                                        res.status(500).send("Database error: " + err);
                                    } else {
                                        feedItem.likeCounter = feedItem.likeCounter.map((id) => userMap[id]);
                                        feedItem.contents.author = userMap[feedItem.contents.author];
                                        feedItem.tag = tag
                                        resolvedFeedItems.push(feedItem);
                                        if (resolvedFeedItems.length === size) {
                                            var finalFeed = {
                                                "_id": new ObjectID(userId),
                                                "list_of_feeditems": resolvedFeedItems
                                            }
                                            res.status(201).send(finalFeed);
                                        }
                                    }
                                });
                        }
                    });
                });
            });
        } else {
            res.status(401).end();
        }
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
