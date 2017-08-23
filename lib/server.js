const express = require('express');
const config = require('./config');

const app = express();

// static middleware to serve static directory
app.use(express.static('public'));
// configure templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // render index and pass a property called answer to it
  res.render('index', { answer: 42 });
});

app.listen(config.port, () => {
  console.info(`Running node on ${config.port}`);
});

