var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

var { mongoose } = require('../utils/db');

// create a schema
var todoSchema = new mongoose.Schema({
  item: String
});

// Creating a model
var Todo = mongoose.model('Todo', todoSchema);

module.exports = function(app) {

  // Get list items
  app.get('/todo', function(req, res) {
    Todo.find({}, function(err, data) {
      if(err) {
        throw err;
      }
      res.render('index', {todos: data});
    });
  });

  // Save todo item
  app.post('/todo', urlencodedParser, function(req, res) {
    var newTodo = new Todo(req.body);
    newTodo.save(function(err, data) {
      if (err) {
        throw err;
      }
      res.json(data);
    })
  });

  // Delete todo item
  app.delete('/todo/:item', urlencodedParser, function(req, res) {
    var item = req.params.item.replace(/\-/g, ' ');
    Todo.find({item: item}).remove(function(err, data) {
      if (err) {
        throw err;
      }
      res.json(data);
    })
  });
};
