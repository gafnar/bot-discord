const config = require('../config/config');
const botError = require('../service/bot.error.service');
const { basic } = require('../responses/bot.response');
const { clearUndefinedNumber, clearLess, clearMore } = basic;

const getDeleteCountToArgs = (number) => {
  if(isNaN(number)) throw new botError(clearUndefinedNumber);
  const deleteCount = parseInt(number, 10);
  if(deleteCount < 2 ) throw new botError(clearLess);
  if(deleteCount > 100) throw new botError(clearMore);
  return deleteCount;
}

module.exports = {
  ping: async (message, bot) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  },
  clear: async (message, bot, args) => {
    const deleteCount = getDeleteCountToArgs(args[0]);
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    await message.channel.bulkDelete(fetched)
  }
};
