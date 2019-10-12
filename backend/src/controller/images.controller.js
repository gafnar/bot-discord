const config = require('../config/config');
module.exports = {
  diablo: (message) => {
    message.channel.send('El Diablo' ,{
      embed:{
        file: 'assets/images/diablo.jpg',
        footer: 'Diablo mamadisimo',
      },
    });
  },
  barselona: (message) => {
    message.channel.send('Mercuryo go to BARSELONA' ,{
      embed:{
        file: 'assets/images/elTeamImparapla.jpg',
        footer: 'Esto fue lo que susedio el dia que mercuryo fue a barselona.',
      },
    });
  },
};