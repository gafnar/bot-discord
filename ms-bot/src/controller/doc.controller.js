const doc = require('../config/doc');

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

module.exports = {
  commands: message => message.reply('Aun no implementado'),
  help: (message) => {
    const list = Object.keys(doc).map((primary) => {
      let command = `:white_small_square:**${capitalize(primary)}**\n`;
      command += `*Descripción*: \`${doc[primary].description}\``;
      return command;
    });
    message.channel.send(list.join('\n'));
  },
};
