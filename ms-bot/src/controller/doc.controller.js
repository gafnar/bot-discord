const doc = require('../config/doc');

module.exports = {
  commands: message => message.reply('Aun no implementado'),
  help: (message) => {
    const list = Object.keys(doc).map((primary) => {
      let command = `- ${primary}\n`;
      command += Object.keys(doc[primary]).map(controller => `\t - ${controller} \n`);
      return command.replace(',', '');
    });
    message.channel.send(list);
  },

};
