const { createInternalResponse: res} = require('../service/response.service');
module.exports = {
  common: {
    commandNotFound: res(400, 400, 'Comando no encontrado',[{ msg: 'Comando no encontrado' }]),
  },
  basic: {
    clearUndefinedNumber: res(400, 400, 'Error con el numero de mensajes',[{ msg: 'Error con el numero de mensajes' }]),
  },
};