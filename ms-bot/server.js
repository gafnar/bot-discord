require('dotenv').config();
global.config = require('./src/config/config');
require('./src/app');
const log = require('./src/config/logger');
