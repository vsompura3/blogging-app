import { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 64,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 64,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 64,
    },
    profilePhoto: {
      type: String,
      default: '/images/male-user-placeholder.webp',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
)
