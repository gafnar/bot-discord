const config = require('../config/config');

module.exports = {
  price: (message) => {
    const args = message.content.slice(config.discord.prefix.length).trim().split(/ +/g);
    message.reply(`Aun no implementado ${args}`);
  },
};
