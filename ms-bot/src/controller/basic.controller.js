const BotError = require('../service/bot.error.service');
const { subDaysToDate } = require('../service/date.service');
const { basic } = require('../responses/bot.response');

const { clearUndefinedNumber, clearLess, clearMore } = basic;

const getDeleteCountToArgs = (messageNumber) => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(messageNumber)) throw new BotError(clearUndefinedNumber);
  const deleteCount = parseInt(messageNumber, 10);
  if (deleteCount < 2) throw new BotError(clearLess);
  if (deleteCount > 100) throw new BotError(clearMore);
  return deleteCount;
};


const messageIsUnderDate = message => message.createdTimestamp > subDaysToDate(14);

module.exports = {
  ping: async (message, bot) => {
    const m = await message.channel.send('Ping?');
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  },
  clear: async (message, bot, args) => {
    const deleteCount = getDeleteCountToArgs(args[0]);
    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    const fetchedOk = fetched.filter(messageIsUnderDate);
    await message.channel.bulkDelete(fetchedOk);
  },
};
