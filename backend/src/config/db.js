// Set up mongoose connection
const mongoose = require('mongoose');
const log = require('./logger');

const { mongo } = require('./config');

mongoose.set('useCreateIndex', true);

const connection = mongoose.connect(mongo.uri, {
  auth: {
    user: '',
    password: '',
  },
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', (err) => {
  log.error(`MongoDB connection error: ${err}`);
});

module.exports = connection;
