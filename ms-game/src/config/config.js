module.exports = {
  app: {
    name: 'bot-discord',
    port: parseInt(process.env.PORT, 10) || 3015,
    https: process.env.HTTPS === 'true',
    url: process.env.APP_URL || 'http://localhost',
    baseUrl: '/',
    logLevel: process.env.LOG_LEVEL || 'debug',
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  SSL: {
    url: process.env.SSL_URL,
  },
  tokenSignature: process.env.TOKEN_SIGNATURE || 'SIGNATURE',
  discord:{
    token: process.env.TOKEN_DISCORD || '',
    prefix: 'm',
  },
};
