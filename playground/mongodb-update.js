
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Update
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID("5a15c62d03004d0ec79791db")
  //
  // }, {
  //   $set: {
  //     complate: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });
  // db.collection('Users').findOneAndUpdate({
  //   _id : new ObjectID("5a198df08bc9b73ec5d08c85")
  // }, {
  //   $set: {
  //     name: "Saudude"
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });
  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID("5a198df08bc9b73ec5d08c85")
  },{
    $set: {
      name: "Saud"
    },
    $inc: {
      age:-2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  //db.close();
});
