import { Schema, model } from 'mongoose'
import userMiddleware from '../../middleware/user/user.middleware.js'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxLength: 32,
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
      maxLength: 32,
    },
    profilePhoto: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 160,
    },
    role: {
      type: String,
      default: 'user',
    },
    gender: {
      type: String,
      enum: ['M', 'F'],
      maxlength: 1,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    whenBanned: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  if (
    !this.isModified('dateOfBirth') ||
    !this.isModified('profilePhoto') ||
    !this.isModified('password')
  ) {
    next()
  }
  userMiddleware(this)
})
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = model('User', userSchema)
export { userSchema }
export default User
