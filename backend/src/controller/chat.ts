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

router.get('/:id/dialogs', async (req, res, next) => {
  try {
    const userId = Types.ObjectId(req.params.id);
    const dialogs = await chatService.getAllDialogs(userId);
    return res.send(dialogs);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
