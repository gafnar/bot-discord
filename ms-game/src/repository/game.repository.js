const mongoose = require('mongoose');

const schemaGame = {
};

const schema = new mongoose.Schema(schemaGame, { timestamps: true });
const Game = mongoose.model('Game', schema, 'games');

const save = ({

}) => new Promise(((resolve, reject) => {
  Game.create({

  }, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve((res) ? res.toObject() : res);
    }
  });
}));

const update = ({}) => new Promise(((resolve, reject) => {
  Game.findOneAndUpdate({ _id }, {

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
