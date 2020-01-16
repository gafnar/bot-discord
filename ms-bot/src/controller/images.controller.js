module.exports = {
  diablo: (message) => {
    message.channel.send('El Diablo', {
      embed: {
        file: 'assets/images/diablo.jpg',
        footer: 'Diablo mamadisimo',
      },
    });
  },
};
