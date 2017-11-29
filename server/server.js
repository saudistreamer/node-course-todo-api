const express = require('express');
const bodyParser = require('body-parser');
var {mongoose} = require("./db/mongoose");
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then( (doc) => {
    res.send(doc);
    //console.log(JSON.stringify(doc, undefined, 2));
  }, (e) => {
    //console.log(e);
    res.status(400).send(e);
  });
  //console.log(req.body);
})

app.listen(3000, () => {
  console.log('Started on port 3000');
});


module.exports = {app};
 // var newTodo = new Todo({
 //   text: 'Cook dinner'
 // });
 //
 // newTodo.save().then( (doc) => {
 //   console.log('Saved todo', doc);
 //
 // }, (e) => {
 //   console.log(e);
 // });

// var newTodo2 = new Todo({
//   text: 'Finish course',
//
// });
//
// newTodo2.save().then( (doc) => {
//
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log(e);
// });


//User
//email - required - trim it - set type -set  min length to 1
//password


// var user = new User({
//   email: "sa@gmail.com  "
// });
//
// user.save().then( (doc) => {
//   console.log(doc);
//
// }, (e) => {
//   console.log("unable to save User", e);
// })
