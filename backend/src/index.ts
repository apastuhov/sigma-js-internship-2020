import bodyParser from 'body-parser';
import express from 'express';
import { PORT } from './constant';
import routes from './controller/index';
const path = require('path');
import './data/db/mongoose';
import { corsMiddleware } from './middleware/cors';
const app = express();

app.use(corsMiddleware);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../fe/')));

app.use('/api/', routes);

app.get('/healthcheck', (req, res) => res.send('Express + TypeScript Server'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../fe/index.html'));
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
