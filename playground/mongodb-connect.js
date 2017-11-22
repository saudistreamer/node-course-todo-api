// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// var user = {name: 'Suad', ago:23};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

console.log("connected to MongoDB server");

// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   complate: false
// }, (err, results) => {
//   if(err){
//     return console.log('Unable to insert todo', err);
//   }
//   console.log(JSON.stringify(results.ops), undefined, 2);
// });

// db.collection('Users').insertOne({
//   name: 'Rashed',
//   age: 21,
//   location: 'Riyadh'
// }, (err, results) => {
//     if(err){
//       return console.log('Unable to insert User', err);
//     }
//     console.log(JSON.stringify(results.ops), undefined, 2);
//     //results.ops._id.getTimestamp()
//
// })

//   db.collection('Todos').find({
//     _id: new ObjectID("5a15c62d03004d0ec79791db")
//   }).toArray().then((docs) =>{
//
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//
//   }, (err) => {
//     console.log("Unable to fetch todos",err);
//   });
//
//   // db.close();

// db.collection('Todos').find().count().then((count) =>{
//
//   console.log('Todos');
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log("Unable to fetch todos",err);
// });

  db.collection('Users').find({name: 'Saud'}).toArray().then((docs) =>{

    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log("Unable to fetch todos",err);
  });


// db.close();
});
