var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "URideST";
// Put the initial mock objects here.
var initialData = {
  "users":{
    "1": {
      "_id":new ObjectID("000000000000000000000001"),
      "confirmedRides":[new ObjectID("000000000000000000000001")],
      "pendingRides": [new ObjectID("000000000000000000000001")]
    }
  },

  "pendingRides": {
    "1":{
      "_id":new ObjectID("000000000000000000000001"),
      "pickupTime":"11:00 AM - 11:15 AM",
      "pickupDate":1492544152941,
      "isConfirmed":true,
      "dropoff":"LGRC",
      "pickup":"FAC",
      "van":20,
      "user":"Jucong"
    }
  },

  "confirmedRides": {
      "1":{
        "_id":new ObjectID("000000000000000000000001"),
        "pickupTime":"11:00 AM - 11:15 AM",
        "pickupDate":1492544152941,
        "isConfirmed":true,
        "dropoff":"LGRC",
        "pickup":"FAC",
        "van":20,
        "user":"Jucong"
      }
    },

  "locations": {
    "1": {
      "_id":new ObjectID("000000000000000000000001"),
      "building":"Agricultural Engineering Bldg"
    },

    "2": {
      "_id":new ObjectID("000000000000000000000002"),
      "building":"Agricultural Experiment Station (Alterations)"
    },

    "3": {
      "_id":new ObjectID("000000000000000000000003"),
      "building":"Army ROTC Bldg"
    },

    "4": {
      "_id":new ObjectID("000000000000000000000004"),
      "building":"Arnold House"
    },

    "5": {
      "_id":new ObjectID("000000000000000000000005"),
      "building":"(Studio) Arts Building"
    },

    "6": {
      "_id":new ObjectID("000000000000000000000006"),
      "building":"Auxiliary Services Warehouse"
    },

    "7": {
      "_id":new ObjectID("000000000000000000000007"),
      "building":"Baker House (offices)"
    },

    "8": {
      "_id":new ObjectID("000000000000000000000008"),
      "building":"Bartlett Hall"
    },

    "9": {
      "_id":new ObjectID("000000000000000000000009"),
      "building":"Berkshire House"
    },

    "10": {
      "_id":new ObjectID("000000000000000000000010"),
      "building":"Berkshire Dining Common"
    },

    "11": {
      "_id":new ObjectID("000000000000000000000011"),
      "building":"Blaisdell"
    },

    "12": {
      "_id":new ObjectID("000000000000000000000012"),
      "building":"Bowditch Hall"
    },

    "13": {
      "_id":new ObjectID("000000000000000000000013"),
      "building":"Bowditch Lodge"
    },

    "14": {
      "_id":new ObjectID("000000000000000000000014"),
      "building":"Boyden"
    },

    "15": {
      "_id":new ObjectID("000000000000000000000015"),
      "building":"Brett (Offices)"
    },

    "16": {
      "_id":new ObjectID("000000000000000000000016"),
      "building":"Campus Center"
    },

    "17": {
      "_id":new ObjectID("000000000000000000000017"),
      "building":"Cance (offices)"
    },

    "18": {
      "_id":new ObjectID("000000000000000000000018"),
      "building":"Central Heating Plant"
    },

    "19": {
      "_id":new ObjectID("000000000000000000000019"),
      "building":"Champions Center"
    },

    "20": {
      "_id":new ObjectID("000000000000000000000020"),
      "building":"Chancellor's House"
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
