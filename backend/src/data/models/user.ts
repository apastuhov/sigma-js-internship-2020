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
  sex: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthday: { type: Date, required: true },
  country: { type: String, required: true },
  countryCode: { type: String, required: true },
  speak: {
    type: [
      {
        language: { type: String, required: true },
        level: { type: String, required: true }
      }
    ],
    validate: (v: object[]) => {
      return typeof v === 'object' && v.length > 0;
    }
  },
  learn: {
    type: [
      {
        language: { type: String, required: true },
        level: { type: String, required: true }
      }
    ],
    validate: (v: object[]) => {
      return typeof v === 'object' && v.length > 0;
    }
  },
  about: String,
  avatar: String
};

const userSchema = new Schema(userSchemaFields);

export const User = model<DTO.IUserDoc>('User', userSchema);
