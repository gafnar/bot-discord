const audios = require('../config/audio');
const botError = require('../service/bot.error.service');
const { common ,audio } = require('../responses/bot.response');

const list = (message) => {
  const list = Object.keys(audios).map(audio => `- ${audio}`);
  return message.channel.send(list);
};

const sendAudio = async (command, message) => {
  if (!message.member.voiceChannel) throw new botError(common.notInChannelVoice);
  let connection = message.member.voiceChannel.connection;
  if(!connection) connection = await message.member.voiceChannel.join();
  const dispatcher = connection.playFile(audios[command]);
  dispatcher.on('end', () => {
    message.channel.send('FIN');
  });
};

const musicQueue = [];
module.exports = {
  audio: async (message, bot, args) => {
    const command = args[0];
    if(typeof command !== 'string') throw new botError(commandNotFound);
    if(command === 'list') return list(message)
    if(typeof audios[command] !== 'undefined') return sendAudio(command, message);
    throw new botError(audio.notFound);
  },
};
