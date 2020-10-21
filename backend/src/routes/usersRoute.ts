import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
const router = express.Router();

const users = fs.readFileSync(path.join(__dirname, '../mocks/users-mock.json'));

router.get('/', (req, res, next) => {
  try {
    return res.send(users);
  } catch (e) {
    next(e);
  }
});

router.post('/', jsonParser, (req, res, next) => {
  try {
    console.log(req.body);
    return res.send(users);
  } catch (e) {
    next(e);
  }
});

export default router;
