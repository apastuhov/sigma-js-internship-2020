import express from 'express';
import { userService } from '../service/user';
import { Types } from 'mongoose';

const router = express.Router();

// Login & register

router.get('/login', async (req, res) => {
  // TODO: catch errors
  try {
    const mail = req.query.mail;
    const user = await userService.checkUserMail(mail as string);
    return res.status(200).send(user);
  } catch (e) {
    return res.status(404).send(e);
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

router.post('/:id/posts', async (req, res, next) => {
  try {
    const ID = req.params.id;
    const newPost = {
      userId: ID,
      ...req.body
    };
    const posts = await userService.createPost(newPost);
    return res.status(201).send(posts);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
