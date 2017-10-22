const express = require('express');
const config = require('./config');
const serverRender = require('./serverRender');
const app = express();

// static middleware to serve static directory
app.use(express.static('public'));
// configure templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // render index and pass a property called answer to it
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

app.listen(config.port, () => {
  console.info(`Running node on ${config.port}`);
});

