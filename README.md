# URideST
This is the project for CS320 Umass Special Transit

## 1 Clone Repo
```
git clone https://github.com/juconghe/URideST.git
```
## 2 install framework for frontend
```
cd client
npm install
```

## 3 install framework for backend
```
cd server
npm install
```

## 4 install Mongo for Database
Follow the instrutions on [Mongo](https://docs.mongodb.com/manual/administration/install-community/)
After installed Mongo go to a folder you like, but not the folder of this project, we don't want to
store data on git. Then run
```
mkdir db
mongod --dbpath db
```
## 5 install [Mongo 3T](https://studio3t.com/) for viewing database

## 6
Now we move to REAL Server!!! First got to the server folder run
```
npm install
```
Then run (resetdatabase only run for the first time or whenever you change data in resetdatabase.js)
```
node src/resetdatabase.js
```
After that run
```
node src/server.js
```
Now you should open you browser and type the follow in the browser
```
localhost:3000
```
Remember not 8080!!!
