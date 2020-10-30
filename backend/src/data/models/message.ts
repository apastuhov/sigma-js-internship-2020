import { Schema, model, Types } from 'mongoose';
import { DTO } from '../../interface';

const messageSchemaFields: Record<keyof DTO.IMessage, any> = {
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true },
  status: { type: Number, required: true },
  date: { type: Date, default: Date.now }
};

const messageSchema = new Schema(messageSchemaFields);

export const Message = model<DTO.IMessageDoc>('Message', messageSchema);
