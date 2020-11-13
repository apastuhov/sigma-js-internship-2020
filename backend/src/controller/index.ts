import express from 'express';
import googleLogin from '../adapter/google-oauth';
import chatsRoute from './chat';
import usersRoute from './user';
const router = express.Router();

router.use('/user', usersRoute);
router.post('/googleLogin', googleLogin);
router.use('/chat', chatsRoute);

export default router;
