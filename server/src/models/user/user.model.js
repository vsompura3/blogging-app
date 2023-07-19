import { Schema } from 'mongoose'
import hashingPassword from '../../middleware/hashPassword.middleware.js'

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
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      match: /^[a-z0-9-]+$/,
      lowercase: true,
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
      default: '../../assets/images/male-user-placeholder.webp',
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 160,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'O'],
      maxlength: 1,
    },
    whenBanned: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
)

/* 
  @desc - Check if password matches the hashed password in the database
*/
const modifiedSchema = hashingPassword(userSchema)
const User = mongoose.model('User', modifiedSchema)
export default User
