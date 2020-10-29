import express from 'express';
import usersRoute from './user';

const router = express.Router();

router.use('/user', usersRoute);

export default router;
