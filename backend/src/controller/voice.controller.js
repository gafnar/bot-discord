const config = require('../config/config');
const audios = require('../config/audio');
const musicQueue = []; 
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
          let connection = message.member.voiceChannel.connection;
          if(!connection) connection = await message.member.voiceChannel.join();
          const dispatcher = connection.playFile(audios[commannd]);
          dispatcher.on('end', () => {
            message.channel.send('FIN');
          });
        } else message.reply('No estas en el canal de voz!');  
      }else message.reply('Audio no encontrado prueba con m audio list');  
    }
  },
};
