import express from 'express';
import { Types } from 'mongoose';
import { DTO } from '../interface';
import { userService } from '../service/user';

const router = express.Router();

// Login & register

router.post('/register', async (req, res, next) => {
  // TODO: catch errors
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(400).send(e);
  }
});

// User info

router.get('/:id', async (req, res, next) => {
  // TODO: catch errors
  try {
    const ID = Types.ObjectId(req.params.id);
    const user = await userService.getUserById(ID);
    return res.send(user);
  } catch (e) {
    next(e);
  }
});

router.post<any, any, DTO.FilterRequest, any>('/filter', async (req, res, next) => {
  // TODO: catch errors
  try {
    const params = req.body;
    const users = await userService.getUsersByParams(params);
    return res.send(users);
  } catch (e) {
    console.log(e);
  }
});

router.get('/', async (req, res, next) => {
  // TODO: catch errors
  try {
    const users = await userService.getUsers();
    return res.send(users);
  } catch (e) {
    next(e);
  }
});

// User friends

router.get('/:id/friends', async (req, res, next) => {
  try {
    const userId = Types.ObjectId(req.params.id);
    const friends = await userService.getUserFriendsById(userId);
    return res.send(friends);
  } catch (e) {
    next(e);
  }
});

// User posts

router.get('/:id/posts', async (req, res, next) => {
  try {
    const ID = req.params.id;
    const posts = await userService.getAllPostByUserId(Types.ObjectId(ID));
    return res.send(posts);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.post<any, any, DTO.IPost, any>('/:id/posts', async (req, res, next) => {
  try {
    const ID = req.params.id;
    const newPost = {
      userId: ID,
      body: req.body.body,
      createdBy: req.body.createdBy
    };
    const posts = await userService.createPost(newPost);
    return res.status(201).send(posts);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
