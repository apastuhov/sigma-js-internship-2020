import express from 'express';
import usersRoute from './user';

const router = express.Router();

router.use('/users', usersRoute);

export default router;
