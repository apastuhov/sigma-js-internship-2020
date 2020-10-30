import { Schema, model, Types } from 'mongoose';
import { DTO } from '../../interface';

const dialogSchemaFields: Record<keyof DTO.IDialogs, any> = {
  participants: [{ type: Types.ObjectId, ref: 'User', required: true }],
  messages: [{ type: Types.ObjectId, ref: 'Message', required: true }]
};

const dialogSchema = new Schema(dialogSchemaFields);

export const Dialog = model<DTO.IDialogsDoc>('Dialog', dialogSchema);
