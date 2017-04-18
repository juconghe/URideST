var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "exser";
// Put the initial mock objects here.
var initialData = {
    "users": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "first_name": "Karen",
            "last_name": "Zheung",
            "profilepic": 'img/cat.jpeg',
            "username": "Karen",
            "password": "123abc",
            "email": "kzheung@umass.edu",
            "favorite_quote": "Meow meow",
            "areas_of_interest": ["Art", "Astronomy", "Technology"],
            "classes_taken": ["MATH132", "CS121", "JAP497", "CS250", "CS220"],
            "education_level": "Junior",
            "academic_institution": "Umass Amherst",
            //start of references
            "Academic_feed": new ObjectID("000000000000000000000001"),
            "Service_feed": new ObjectID("000000000000000000000001"),
            "schedules": [
                new ObjectID("000000000000000000000001"),
                new ObjectID("000000000000000000000002"),
                new ObjectID("000000000000000000000003"),
                new ObjectID("000000000000000000000004"),
                new ObjectID("000000000000000000000005"),
                new ObjectID("000000000000000000000006"),
                new ObjectID("000000000000000000000007")
            ],
            "messageboxes": [new ObjectID("000000000000000000000001")],
            "Academic_savedlists": new ObjectID("000000000000000000000001"),
            "Service_savedlists": new ObjectID("000000000000000000000001")
        },

        "2": {
            "_id": new ObjectID("000000000000000000000002"),
            "first_name": "Thien",
            "last_name": "Dinh",
            "profilepic": 'img/kiwi.jpg',
            "username": "Thien",
            "password": "Thien'sPassword",
            "email": "tddinh@umass.edu",
            "favorite_quote": "You become what you think about.",
            "areas_of_interest": ["Art", "Astronomy", "Technology"],
            "classes_taken": ["MATH107", "CS320", "ENGLISH112"],
            "education_level": "Senior",
            "academic_institution": "Umass Amherst",
            //start of references
            "Academic_feed": new ObjectID("000000000000000000000001"),
            "Service_feed": new ObjectID("000000000000000000000001"),
            "schedules": [new ObjectID("000000000000000000000002")],
            "messageboxes": [new ObjectID("000000000000000000000001")],
            "Academic_savedlists": new ObjectID("000000000000000000000002"),
            "Service_savedlists": new ObjectID("000000000000000000000002")
        },

        "3": {
            "_id": new ObjectID("000000000000000000000003"),
            "first_name": "Timothy",
            "last_name": "Addai",
            "profilepic": 'img/pug.jpg',
            "username": "Timothy",
            "password": "Timtimpass",
            "email": "taddai@umass.edu",
            "favorite_quote": "I have a dream.",
            "areas_of_interest": ["Art", "Astronomy", "Technology"],
            "classes_taken": ["CS187", "CHEM111", "MATH235"],
            "education_level": "Junior",
            "academic_institution": "Umass Amherst",
            //start of references
            "Academic_feed": new ObjectID("000000000000000000000001"),
            "Service_feed": new ObjectID("000000000000000000000001"),
            "schedules": [new ObjectID("000000000000000000000003")],
            "messageboxes": [new ObjectID("000000000000000000000001")],
            "Academic_savedlists": new ObjectID("000000000000000000000003"),
            "Service_savedlists": new ObjectID("000000000000000000000003")
        },

        "4": {
            "_id": new ObjectID("000000000000000000000004"),
            "first_name": "Jucong",
            "last_name": "He",
            "profilepic": 'img/question_img.jpeg',
            "username": "Jucong",
            "password": "123abc",
            "email": "juconghe@umass.edu",
            "favorite_quote": "CSS Expert has nothing to say.",
            "areas_of_interest": ["Art", "Astronomy", "Technology"],
            "classes_taken": ["CS187", "CS250", "HIST111"],
            "education_level": "Junior",
            "academic_institution": "Umass Amherst",
            //start of references
            "Academic_feed": new ObjectID("000000000000000000000001"),
            "Service_feed": new ObjectID("000000000000000000000001"),
            "schedules": [new ObjectID("000000000000000000000004")],
            "messageboxes": [new ObjectID("000000000000000000000001")],
            "Academic_savedlists": new ObjectID("000000000000000000000004"),
            "Service_savedlists": new ObjectID("000000000000000000000004")
        },

        "5": {
            "_id": new ObjectID("000000000000000000000005"),
            "first_name": "Xin",
            "last_name": "Liu",
            "profilepic": 'img/dog.jpg',
            "username": "Xin",
            "password": "XinPass",
            "email": "xliu0@umass.edu",
            "favorite_quote": "Scheduling like a boss.",
            "areas_of_interest": ["Art", "Astronomy", "Technology"],
            "classes_taken": ["MUSIC101", "CS240", "MATH233"],
            "education_level": "Junior",
            "academic_institution": "Umass Amherst",
            //start of references
            "Academic_feed": new ObjectID("000000000000000000000001"),
            "Service_feed": new ObjectID("000000000000000000000001"),
            "schedules": [new ObjectID("000000000000000000000005")],
            "messageboxes": [new ObjectID("000000000000000000000001")],
            "Academic_savedlists": new ObjectID("000000000000000000000005"),
            "Service_savedlists": new ObjectID("000000000000000000000005")
        },

        "6": {
            "_id": new ObjectID("000000000000000000000006"),
            "first_name": "Jianyi",
            "last_name": "Huang",
            "profilepic": 'img/student.jpg',
            "username": "JianYi",
            "password": "HuangJianyi!@#",
            "email": "jianyihuang@umass.edu",
            "favorite_quote": "You only live once.",
            "areas_of_interest": ["Art", "Astronomy", "Technology"],
            "classes_taken": [],
            "education_level": "Junior",
            "academic_institution": "Umass Amherst",
            //start of references
            "Academic_feed": new ObjectID("000000000000000000000001"),
            "Service_feed": new ObjectID("000000000000000000000001"),
            "schedules": [new ObjectID("000000000000000000000006")],
            "messageboxes": [new ObjectID("000000000000000000000001")],
            "Academic_savedlists": new ObjectID("000000000000000000000006"),
            "Service_savedlists": new ObjectID("000000000000000000000006")
        }
    },

    "tasks": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "completed": false,
            "contents": {
                //ID of the user that the appointment is with
                "party": new ObjectID("000000000000000000000003"),
                "date": "10/6/2016",
                "timestamp_start": "8:00 am",
                "timestamp_end": "12:00 pm",
                "contents": "MATH411"
            }
        },
        "2": {
            "_id": new ObjectID("000000000000000000000002"),
            "completed": false,
            "contents": {
                // ID of the user that the appointment is with
                "party": new ObjectID("000000000000000000000002"),
                "date": "10/6/2016",
                "timestamp_start": "8:00 am",
                "timestamp_end": "12:00 pm",
                "contents": "CS 250"
            }
        }
    },

    "schedules": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "completed": "COMPLETED",
            "contents": {
                "author": "Tim",
                "subscriber": "Karen",
                "date": "5/12/2015",
                "time": "8:00 am - 12am",
                "serviceContents": "CS 250"
            }
        },
        "2": {
            "_id": new ObjectID("000000000000000000000002"),
            "completed": "COMPLETED",
            "contents": {
                // ID of the user that the appointment is with
                "author": "Jucong",
                "subscriber": "Richards",
                "date": "2/6/2011",
                "time": "8:00 am - 12am",
                "serviceContents": "CS 250"
            }
        },
        "3": {
            "_id": new ObjectID("000000000000000000000003"),
            "completed": "COMPLETED",
            "contents": {
                // ID of the user that the appointment is with
                "author": "Karen",
                "subscriber": "JianYi",
                "date": "12/16/2006",
                "time": "8:00 am - 12am",
                "serviceContents": "CS 311"
            }
        },
        "4": {
            "_id": new ObjectID("000000000000000000000004"),
            "completed": "COMPLETED",
            "contents": {
                "author": "Karen",
                "subscriber": "Xin",
                "date": "09/6/2016",
                "time": "8:00 am - 12am",
                "serviceContents": "CS 121"
            }
        },
        "5": {
            "_id": new ObjectID("000000000000000000000005"),
            "completed": "COMPLETED",
            "contents": {
                "author": "Xin",
                "subscriber": "Jucong",
                "date": "10/6/2016",
                "time": "8:00 am - 12am",
                "serviceContents": "CS 121"
            }
        },
        "6": {
            "_id": new ObjectID("000000000000000000000006"),
            "completed": "COMPLETED",
            "contents": {
                "author": "Karen",
                "subscriber": "Thien",
                "date": "11/6/2013",
                "time": "8:00 am - 12am",
                "serviceContents": "CS 121"
            }
        },
        "7": {
            "_id": new ObjectID("000000000000000000000007"),
            "completed": "COMPLETED",
            "contents": {
                "author": "Thien",
                "subscriber": "Jucong",
                "date": "10/6/1996",
                "time": "8:00 am - 12am",
                "serviceContents": "CS 220"
            }
        }
    },

    "messageboxes": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "list_of_users": [
                new ObjectID("000000000000000000000006"),
                new ObjectID("000000000000000000000003"),
                new ObjectID("000000000000000000000005"),
                new ObjectID("000000000000000000000004"),
                new ObjectID("000000000000000000000001"),
                new ObjectID("000000000000000000000002")
            ],
            "list_of_messages_by_users_in_box": [{
                user_id: new ObjectID("000000000000000000000006"),
                timestamp: 1479148390962,
                content: 'the current homepage we have wont count as a page. It would make sense that after the user logs in they are directed to the academic or academic subject page but someone is doing those pages already'
            }, {
                user_id: new ObjectID("000000000000000000000003"),
                timestamp: 1479148390962,
                content: 'is the academic page the one with the grids. I know but I gotta study for interview,so im trynna get basic in then improve upon it'
            }, {
                user_id: new ObjectID("000000000000000000000005"),
                timestamp: 1479148390962,
                content: 'how are you guys doing I am considering adding some material design concept in UI'
            }, {
                user_id: new ObjectID("000000000000000000000004"),
                timestamp: 1479148390962,
                content: 'good job, Jucong. You may create a writeup document for the team if you want.'
            }, {
                user_id: new ObjectID("000000000000000000000005"),
                timestamp: 1479148390962,
                content: 'I only have time after 5 tmr'
            }, {
                user_id: new ObjectID("000000000000000000000004"),
                timestamp: 1479148390962,
                content: 'ok ok ok guys, it\'s fine. We\'ll figure this out.'
            }, {
                user_id: new ObjectID("000000000000000000000005"),
                timestamp: 1479148390962,
                content: 'If possible, can you guys all implement the floating effect ? It\'s very straight forward'
            }, {
                user_id: new ObjectID("000000000000000000000001"),
                timestamp: 1479148390962,
                content: 'I changed the config if you are satisfied with that I will add the css'
            }, {
                user_id: new ObjectID("000000000000000000000002"),
                timestamp: 1479148390962,
                content: 'I thought someone else is doing that one. I can do that too.'
            }],
            "creation_timestamp": 1479148390962
        }
    },

    "classes": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "course_id": "CS311",
            "course_title": "Introduction to Algorithms"
        },
        "2": {
            "_id": new ObjectID("000000000000000000000002"),
            "course_id": "CS250",
            "course_title": "Introduction to Computation"
        },
        "3": {
            "_id": new ObjectID("000000000000000000000003"),
            "course_id": "MATH132",
            "course_title": "Calculus 2"
        }
    },

    "Academic_savedlists": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "list_of_feeditems": [new ObjectID("000000000000000000000001")]
        }
    },

    "Service_savedlists": {
        "1": {
            "_id": new ObjectID("000000000000000000000002"),
            "list_of_posts": [new ObjectID("000000000000000000000002")]
        }
    },

    "feedItems": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            // references post item for content
            "view_count": 25,
            "likeCounter": [new ObjectID("000000000000000000000001")],
            // Taggs are by course_id
            "tag": new ObjectID("000000000000000000000001"),
            "list_of_comments": [
                new ObjectID("000000000000000000000001"),
                new ObjectID("000000000000000000000002")
            ],
            "contents": {
                "author": new ObjectID("000000000000000000000001"),
                "timestamp": 1453668480000,
                "request": "Oh god! CS311 homework is too hard! PlZZZ help",
                "contents": "sending hugs your way",
                "imgUrl": "img/question_img.jpeg"
            }
        },
        "2": {
            "_id": new ObjectID("000000000000000000000002"),
            // references post item for content
            "view_count": 2,
            "likeCounter": [new ObjectID("000000000000000000000002")],
            // Taggs are by course_id
            "tag": new ObjectID("000000000000000000000001"),
            "list_of_comments": [
                new ObjectID("000000000000000000000001"),
                new ObjectID("000000000000000000000002")
            ],
            "contents": {
                "author": new ObjectID("000000000000000000000001"),
                "timestamp": 1453668480000,
                "request": "Oh god! Chinese homework is too hard! PlZZZ help",
                "contents": "呵呵呵呵呵呵呵呵呵呵",
                "imgUrl": "img/history.jpg"
            }
        },
        "3": {
            "_id": new ObjectID("000000000000000000000003"),
            // references post item for content
            "view_count": 0,
            "likeCounter": [new ObjectID("000000000000000000000001")],
            // Taggs are by course_id
            "tag": new ObjectID("000000000000000000000001"),
            "list_of_comments": [
                new ObjectID("000000000000000000000001"),
                new ObjectID("000000000000000000000002")
            ],
            "contents": {
                "author": new ObjectID("000000000000000000000001"),
                "timestamp": 1453668480000,
                "request": "Oh god! My toilet was stucked! PlZZZ help",
                "contents": "呵呵呵呵呵呵呵呵呵呵",
                "imgUrl": "img/toilet_stuck.jpg"
            }
        }
    },

    "comments": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "author": new ObjectID("000000000000000000000001"),
            "timestamp": 1453668480000,
            "contents": "I can help!"
        },
        "2": {
            "_id": new ObjectID("000000000000000000000002"),
            "author": new ObjectID("000000000000000000000001"),
            "timestamp": 1453668480000,
            "contents": "I can help!"
        }
    },

    "servicefeeds": {
        // service feed for user 1, Karen
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            // references to the ids of the post(s) in feed 1
            "list_of_feeditems": [new ObjectID("000000000000000000000003")]
        }
    },

    "academicfeeds": {
        // academic feed for karen
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "list_of_feeditems": [
                new ObjectID("000000000000000000000001"),
                new ObjectID("000000000000000000000002")
            ]
        }
    },

    "servicetags": {
        "1": {
            "_id": new ObjectID("000000000000000000000001"),
            "type_of_service": "Computer Science"
        },
        "2": {
            "_id": new ObjectID("000000000000000000000002"),
            "type_of_service": "Math"
        },
        "3": {
            "_id": new ObjectID("000000000000000000000003"),
            "type_of_service": "Music"
        },
        "4": {
            "_id": new ObjectID("000000000000000000000004"),
            "type_of_service": "History"
        },
        "5": {
            "_id": new ObjectID("000000000000000000000005"),
            "type_of_service": "Physics"
        },
        "6": {
            "_id": new ObjectID("000000000000000000000006"),
            "type_of_service": "English"
        },
        "7": {
            "_id": new ObjectID("000000000000000000000007"),
            "type_of_service": "Pet Related"
        },
        "8": {
            "_id": new ObjectID("000000000000000000000008"),
            "type_of_service": "Home Improvement"
        },
        "9": {
            "_id": new ObjectID("000000000000000000000009"),
            "type_of_service": "Travel"
        },
        "10": {
            "_id": new ObjectID("000000000000000000000010"),
            "type_of_service": "Yard"
        },
        "11": {
            "_id": new ObjectID("000000000000000000000011"),
            "type_of_service": "Plumer"
        },
        "12": {
            "_id": new ObjectID("000000000000000000000012"),
            "type_of_service": "Car Pool"
        }
    }
};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
    // Drop / delete the entire object collection.
    db.collection(name).drop(function() {
        // Get all of the mock objects for this object collection.
        var collection = initialData[name];
        var objects = Object.keys(collection).map(function(key) {
            return collection[key];
        });
        // Insert objects into the object collection.
        db.collection(name).insertMany(objects, cb);
    });
}

function addIndexes(db, cb) {
    db.collection('feedItems').createIndex({
        "contents.contents": "text"
    }, null, cb); //consider adding contents.request
}
/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
    // The code below is a bit complex, but it basically emulates a
    // "for" loop over asynchronous operations.
    var collections = Object.keys(initialData);
    var i = 0;

    // Processes the next collection in the collections array.
    // If we have finished processing all of the collections,
    // it triggers the callback.
    function processNextCollection() {
        if (i < collections.length) {
            var collection = collections[i];
            i++;
            // Use myself as a callback.
            resetCollection(db, collection, processNextCollection);
        } else {
            addIndexes(db, cb);
        }
    }

    // Start processing the first collection!
    processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if (require.main === module) {
    // Called directly, via 'node src/resetdatabase.js'.
    // Connect to the database, and reset it!
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/' + databaseName;
    MongoClient.connect(url, function(err, db) {
        if (err) {
            throw new Error("Could not connect to database: " + err);
        } else {
            console.log("Resetting database...");
            resetDatabase(db, function() {
                console.log("Database reset!");
                // Close the database connection so NodeJS closes.
                db.close();
            });
        }
    });
} else {
    // require()'d.  Export the function.
    module.exports = resetDatabase;
}
