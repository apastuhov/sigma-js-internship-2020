import express from 'express';
import usersRoute from './user';
import googleLogin from '../adapter/google-oauth';
const router = express.Router();

router.use('/user', usersRoute);
router.post('/googleLogin', googleLogin);

export default router;
