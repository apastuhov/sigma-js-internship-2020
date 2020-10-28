import { Schema, model } from 'mongoose';
import { DTO } from '../../interface';

const userSchemaFields: Record<keyof DTO.IUser, any> = {
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  sex: Number,
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthday: { type: Number, required: true },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  country: { type: String, required: true },
  speak: {
    type: Array,
    required: true,
    validate: {
      validator: function (array: object[]) {
        return array.every(v => typeof v === 'object');
      }
    }
  },
  learn: {
    type: Array,
    required: true,
    validate: {
      validator: function (array: object[]) {
        return array.every(v => typeof v === 'object');
      }
    }
  },
  about: String,
  photo: String
};

const userSchema = new Schema(userSchemaFields);

export const User = model<DTO.IUserDoc>('User', userSchema);
