import bodyParser from 'body-parser';
import express from 'express';
import { PORT } from './constant';
import routes from './controller/index';
import './data/db/mongoose';
import { corsMiddleware } from './middleware/cors';
const app = express();

app.use(corsMiddleware);
app.use(bodyParser.json());

app.use('/api/', routes);

app.get('/healthcheck', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
