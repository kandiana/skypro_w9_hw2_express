const path = require('path');
const express = require('express');
const setupMiddlewares = require('./middlewares');
const { mainRouter, apiRouter } = require('./routers');

const { PORT, modules } = require('./config');

const app = express();

// setup view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'pages'));

// setup other middlewares
setupMiddlewares(app);

// for static js/css
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(
  '/fontawesome',
  express.static(path.resolve(modules, '@fortawesome/fontawesome-free/js'))
);

// api route
app.use('/api', apiRouter);
// main routes
app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
