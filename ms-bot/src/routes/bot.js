const botController = require('../controller/bot.controller');
const messageController = require('../controller/message.controller');

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
      if (typeof botController[command] === 'undefined') throw new Error('commandNotFound');
      await botController[command](message, bot,  args);
    } catch (err){
      message.reply(err);
    }
  });
  bot.on('ready', () =>  bot.user.setActivity(`TETO`));
};