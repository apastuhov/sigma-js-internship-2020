import express from 'express';
import usersRoute from './user';
import postRoute from './post';

const router = express.Router();

router.use('/user', usersRoute);
router.use('/posts', postRoute);

export default router;
