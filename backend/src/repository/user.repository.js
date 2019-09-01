const mongoose = require('mongoose');

const schemaUser = {
};

const schema = new mongoose.Schema(schemaUser, { timestamps: true });
const User = mongoose.model('User', schema, 'users');

const save = ({

}) => new Promise(((resolve, reject) => {
  User.create({

  }, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve((res) ? res.toObject() : res);
    }
  });
}));

const update = ({}) => new Promise(((resolve, reject) => {
  User.findOneAndUpdate({ _id }, {

  }, {}, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve((res) ? res.toObject() : res);
    }
  });
}));

module.exports = {
  save,
  update,
};
