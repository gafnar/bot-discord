const config = require('../config/config');
const audios = require('../config/audio');
module.exports = {
  audio: (message) => {
    const args = message.content.slice(config.discord.prefix.length).trim().split(/ +/g);
    const commannd = args[1]; 
    if(typeof commannd === 'string') {
      if(commannd === 'list'){
        const list = Object.keys(audios).map(audio => `- ${audio}`);
        message.channel.send(list);
      }else if(typeof audios[commannd] !== 'undefined') {
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
          .then( connection => connection.playFile(audios[commannd]))
          .catch(console.log);
        } else message.reply('No estas en el canal de voz!');  
      }else message.reply('Audio no encontrado prueba con m audio list');  
    }
  },
};
