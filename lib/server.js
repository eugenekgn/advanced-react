import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from './testData';

const app = express();

// static middleware to serve static directory
app.use(express.static('public'));
// configure templating engine
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  // render index and pass a property called answer to it
  const initialContent = await serverRender();
  res.render('index', initialContent);
});

app.get('/api/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running node on ${config.port}`);
});

