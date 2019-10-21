const Discord = require('discord.js');
const config = require('./config/config');
const bot = require('./routes/bot');
// require('./config/db');
const discord = new Discord.Client();

bot.start(discord, config);
discord.login(config.discord.token);

module.exports = discord;
