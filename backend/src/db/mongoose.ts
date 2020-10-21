import mongoose from 'mongoose';

const dbLink = 'mongodb://localhost:27018/db';

mongoose.connect(dbLink, err => {
  if (err) {
    console.error('Error occured during connection to DB');
    console.error(err);
  } else {
    console.log('Connected to DB succesfully');
  }
});