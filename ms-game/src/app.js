/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require('express');
const helmet = require('helmet');

const config = require('./config/config');

const routes = require('./routes/routes');
require('./config/db');

const app = express();
app.use(helmet());

// Enable Cross-Origin-Access
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
  next();
});

app.options('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '10mb' }));

routes.assignRoutes(app, config);

module.exports = app;
