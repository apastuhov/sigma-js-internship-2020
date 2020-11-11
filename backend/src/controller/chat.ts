import express from 'express';
import { Types } from 'mongoose';
import { chatService } from '../service/chat';
const router = express.Router();

router.get('/:id', async (req, res, next) => {
  // TODO: catch errors
  try {
    const ID = Types.ObjectId(req.params.id);
    const messages = await chatService.getMessagesByChatId(ID);
    return res.send(messages);
  } catch (e) {
    next(e);
  }
});

export default router;
