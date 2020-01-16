const audios = require('../config/audio');
const BotError = require('../service/bot.error.service');
const { common: { commandNotFound, notInChannelVoice }, audio } = require('../responses/bot.response');

const list = (message) => {
  const messageList = Object.keys(audios).map(audioSave => `- ${audioSave}`);
  return message.channel.send(messageList);
};

const sendAudio = async (command, message) => {
  if (!message.member.voiceChannel) throw new BotError(notInChannelVoice);
  let { connection } = message.member.voiceChannel;
  if (!connection) connection = await message.member.voiceChannel.join();
  const dispatcher = connection.playFile(audios[command]);
  dispatcher.on('end', () => {
    message.channel.send('FIN');
  });
};

module.exports = {
  audio: async (message, bot, args) => {
    const command = args[0];
    if (typeof command !== 'string') throw new BotError(commandNotFound);
    if (command === 'list') return list(message);
    if (typeof audios[command] !== 'undefined') return sendAudio(command, message);
    throw new BotError(audio.notFound);
  },
};
