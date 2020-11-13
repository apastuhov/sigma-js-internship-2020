import express from 'express';
import { Types } from 'mongoose';
import { chatService } from '../service/chat';
import { DTO } from '../interface';
const router = express.Router();

// GET ALL MESSAGES

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

// CREATE NEW MESSAGE

router.post<any, any, DTO.IMessage, any>('/:id/message', async (req, res, next) => {
  try {
    const dialogId = Types.ObjectId(req.params.id);
    const newMessage = {
      userId: req.body.userId,
      body: req.body.body,
      status: req.body.status
    }
    const message = await chatService.setNewMessage(newMessage, dialogId);
    return res.status(201).send(message);
  } catch (e) {
    return res.status(400).send(e);
  }
});

// CREATE DIALOG

router.post<any, any, DTO.IDialogs, any>('/dialogs', async (req, res, next) => {
  try {
    const newDialog = {
      participants: req.body.participants.sort()
    }
    await chatService.createDialog(newDialog);
    return res.status(201).send(newDialog);
  } catch (e) {
    return res.status(400).send(e);
  }
});

// GET ALL DIALOGS

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
