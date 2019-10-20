const botController = require('../controller/bot.controller');
const messageController = require('../controller/message.controller');
const botError = require('../service/bot.error.service');
const { commandNotFound } = require('../responses/bot.response');

const getCommandAndArgs = (message) => {
  const args = message.content.slice(config.discord.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  return {
    args,
    command,
  };
};


exports.start = (bot, config) => {
  bot.on('message', async message => {
    try {
      if(message.author.bot) return;
      if(message.content.indexOf(config.discord.prefix) !== 0) return;
      const { args, command} = getCommandAndArgs(message);
      // TODO ADD ERROR CONTROLLER
      if (typeof botController[command] === 'undefined') throw new botError(commandNotFound);
      await botController[command](message, bot,  args);
    } catch (err){
      if (err instanceof botError)
        message.reply(err.message);
    }
  });
  bot.on('ready', () =>  bot.user.setActivity(`Minecraft`));
};