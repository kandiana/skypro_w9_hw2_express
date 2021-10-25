const { Router } = require('express');

const ping = require('./controllers/ping');
const api = require('./controllers/api');
const pages = require('./controllers/pages');

const apiRouter = new Router();

apiRouter.post('/secret', api.saveSecret);

const mainRouter = new Router();

mainRouter.get('/ping', ping);
mainRouter.get('/secret/:id/:eternal', pages.secret);
mainRouter.get('/', pages.home);

module.exports = {
  apiRouter,
  mainRouter,
};
