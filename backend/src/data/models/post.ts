import { Schema, model } from 'mongoose';
import { DTO } from '../../interface';

const postSchemaFields: Record<keyof DTO.IPost, any> = {
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true }
};

const postSchema = new Schema(postSchemaFields);

export const Post = model<DTO.IPostDoc>('Post', postSchema);
