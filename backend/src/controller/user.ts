import express from 'express';
import { userService } from '../service/user';

const router = express.Router();

router.get('/', async (req, res, next) => {
  // TODO: catch errors
  console.log('1');
  try {
    const users = await userService.getAllUsers();
    console.log(users);
    return res.send(users);
  } catch (e) {
    next(e);
  }
});

router.post('/register', async (req, res, next) => {
  // TODO: catch errors
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
