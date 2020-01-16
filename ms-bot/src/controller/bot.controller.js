const game = require('./game.controller');
const doc = require('./doc.controller');
const voice = require('./voice.controller');
const images = require('./images.controller');
const basic = require('./basic.controller');
const message = require('./message.controller');

module.exports = {
  ...voice,
  ...message,
  ...doc,
  ...basic,
  ...images,
  ...game,
};
