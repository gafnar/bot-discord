const botController = require('../controller/bot.controller');
const messageController = require('../controller/message.controller');
exports.assignRoutes = (bot, config) => {   
  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.content === 'f') messageController.f(message);
    if(message.content.indexOf(config.discord.prefix) !== 0) return;
    const args = message.content.slice(config.discord.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (typeof botController[command] === 'undefined'){ 
      message.reply(`Comando no encontrado`);
      return;
    }
    try {
      await botController[command](message, bot);
    } catch (err){
      console.log(err);
      message.reply('Error :(');
    }
  });
  bot.on("ready", () =>  bot.user.setActivity(`TETO`));
};