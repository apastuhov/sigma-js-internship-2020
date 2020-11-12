import mongoose from 'mongoose';
import { dbAddress, dbName, dbPort, user } from '../settings';

const dbUser = user ? `${user}:${user}@` : '';

const dbLink = `mongodb://${dbUser}${dbAddress}:${dbPort}/${dbName}`;

mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, err => {
  if (err) {
    console.error('Error occured during connection to DB');
    console.error(err);
  } else {
    console.log('Connected to DB succesfully');
  }
});
