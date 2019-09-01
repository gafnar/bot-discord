const config = require('../config/config');
const audios = require('../config/audio');
module.exports = {
  audio: async (message, bot) => {
    const args = message.content.slice(config.discord.prefix.length).trim().split(/ +/g);
    const commannd = args[1]; 
    if(typeof commannd === 'string') {
      if(commannd === 'list'){
        const list = Object.keys(audios).map(audio => `- ${audio}`);
        message.channel.send(list);
      }else if(typeof audios[commannd] !== 'undefined') {
        if (message.member.voiceChannel) {
         const connection = await message.member.voiceChannel.join();
         await connection.playFile(audios[commannd]);
        } else message.reply('No estas en el canal de voz!');  
      }else message.reply('Audio no encontrado prueba con m audio list');  
    }
  },
};
