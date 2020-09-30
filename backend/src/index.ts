import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;
const dbLink = 'mongodb://localhost:27018/db';

mongoose.connect(dbLink, err => {
  if (err) {
    console.error('Error occured during connection to DB');
    console.error(err);
  } else {
    console.log('Connected to DB succesfully');
  }
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
