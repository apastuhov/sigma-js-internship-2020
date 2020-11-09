import mongoose from 'mongoose';

import { user, dbAddress, dbName, dbPort } from '../settings';

const dbUser = user? `${user}:${user}@` : '';

const dbLink = `mongodb://${dbUser}${dbAddress}:${dbPort}/${dbName}`;

mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) {
    console.error('Error occured during connection to DB');
    console.error(err);
  } else {
    console.log('Connected to DB succesfully');
  }
});
