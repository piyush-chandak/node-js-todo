var express = require('express');

var app = express();

// Setting up all controllers
var todoContorller = require('./controllers/todoController');

//set up template engine
app.set('view engine', 'ejs');

// static file
app.use(express.static('./public/assets'));

//Listen to port
app.listen(3000);
console.log('You are listening to port 3000');

//Fire controllers
todoContorller(app);

// Redirecting to default route
app.use(function(req, res){
  res.redirect('/todo');
});
