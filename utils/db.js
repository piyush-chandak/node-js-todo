var mongoose = require('mongoose');

const uri = 'mongodb+srv://test:test@todoapp-twvcq.mongodb.net/todo?retryWrites=true&w=majority';

// Connect to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected…')
}).catch(err => {
  console.log(err)
});

module.exports.mongoose = mongoose;
