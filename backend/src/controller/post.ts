import express from 'express';
import { Types } from 'mongoose';
import { postService } from '../service/post';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const ID = Types.ObjectId(req.query.id as string);
    const posts = await postService.getAllPostById(ID);
    return res.send(posts);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const posts = await postService.createPost(req.body);
    return res.status(201).send(posts);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
