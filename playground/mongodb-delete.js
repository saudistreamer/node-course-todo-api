
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


// deleteMany
//  db.collection('Users').deleteMany({name: "Fahad" }).then( (result) => {
//
// console.log(result);
//
//  });
// deleteOne
 // db.collection('Todos').deleteOne({text: "Learn how to cook" }).then((result) =>{
 //   console.log(result);
 // })
//findOneAndDelete
db.collection('Users').findOneAndDelete({_id : new ObjectID("5a198e2a8bc9b73ec5d08c95")}).then((result) =>{
  console.log(JSON.stringify(result, undefined, 2));
})
  db.close();
});
