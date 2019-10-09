const Discord = require('discord.js');
const config = require('./config/config');
const routes = require('./routes/bot.route');
// require('./config/db');
const bot = new Discord.Client();

routes.assignRoutes(bot, config);
bot.login(config.discord.token);

module.exports = bot;
