const config = require('../config/config');
module.exports = {
  seh: (message) => {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
      .then(connection => {
        connection.playFile('assets/audio/seeh.mp3');
      })
      .catch(console.log);
    } else message.reply('No estas en el canal de voz!');  
  },
  scream: (message) => {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
      .then(connection => {
        connection.playFile('assets/audio/grito.mp3');
      })
      .catch(console.log);
    } else  message.reply('No estas en el canal de voz!');
  },
};
