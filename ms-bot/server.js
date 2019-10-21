require('dotenv').config();
global.config = require('./src/config/config');
const log = require('./src/config/logger');
const app = require('./src/app');