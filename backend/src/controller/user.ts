import express from 'express';
import { DTO } from '../interface';
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

router.post<any, any, DTO.User.FilterRequest, any>('/filter', async (req, res, next) => {
  // TODO: catch errors
  try {
    const parameters = req.body;
    const users = await userService.search(parameters);
    return res.send(users);
  } catch (e) {
    next(e);
  }
});

export default router;
