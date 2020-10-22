import express from 'express';
import { DTO } from '../interface';
import { userService } from '../service/user';

const router = express.Router();

router.post<any, any, DTO.User.FilterRequest, any>('/filter', async (req, res, next) => {
  // TODO: catch errors
  try {
    const { name } = req.body;
    const users = await userService.search(name);
    return res.send(users);
  } catch (e) {
    next(e);
  }
});

export default router;
