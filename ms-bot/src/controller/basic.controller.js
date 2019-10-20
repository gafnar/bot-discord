const config = require('../config/config');
const botError = require('../service/bot.error.service');
const { basic } = require('../responses/bot.response');
const { clearUndefinedNumber } = basic;
module.exports = {
  ping: async (message, bot) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  },
  clear: async (message, bot, args) => {
    if(Number(args[0]) === 'NaN') throw new botError(clearUndefinedNumber);
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100) {
      return message.reply("Dime cuantos mensajes borro");
    }
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    await message.channel.bulkDelete(fetched)
  }
};
