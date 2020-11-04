import { model, Schema, Types } from 'mongoose';
import { DTO } from '../../interface';

const friendsFields: Record<keyof DTO.IUserFriends, any> = {
  userId: { type: Types.ObjectId, required: true },
  friends: [
    {
      type: Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User'
    }
  ],
};

const friendsSchema = new Schema(friendsFields);

export const Friends = model<DTO.IUserFriendsDoc>('Friends', friendsSchema);
