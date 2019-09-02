const config = require('../config/config');
module.exports = {
  ping: async (message, bot) => {
    const m = await message.channel.send("Ping?"); 
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  },
  clear: async (message) =>{
    const args = message.content.slice(config.discord.prefix.length).trim().split(/ +/g);
    const deleteCount = parseInt(args[1], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Dime cuantos mensajes mamadisimos borro");
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    await message.channel.bulkDelete(fetched)
  }
};