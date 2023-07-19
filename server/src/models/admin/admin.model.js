import { Schema, model } from 'mongoose'
import {
  calculateAge,
  hashingPassword,
  setPlaceholderPic,
} from '../../middleware/user/user.middleware.js'
import { userSchema } from '../user/user.model.js'

const adminSchema = new Schema(
  {
    name: userSchema.obj.name,
    email: userSchema.obj.email,
    username: userSchema.obj.username,
    password: userSchema.obj.password,
    dateOfBirth: userSchema.obj.dateOfBirth,
    age: userSchema.obj.age,
    bio: userSchema.obj.bio,
    profilePhoto: userSchema.obj.profilePhoto,
    gender: userSchema.obj.gender,
    isActive: userSchema.obj.isActive,
    whenBanned: userSchema.obj.whenBanned,
    role: {
      type: String,
      default: 'admin',
    },
  },
  { timestamps: true },
)

/* @desc - Hashes the password before saving it to the database */
const modifiedSchemaAfterHashing = hashingPassword(adminSchema)
/* @desc - Calculates the age before saving it to the database age field */
const modifiedSchemaAfterCalculatingAge = calculateAge(
  modifiedSchemaAfterHashing,
)
/* @desc - Sets a placeholder profile photo before saving it to the database [based on gender] */
const modifiedSchema = setPlaceholderPic(modifiedSchemaAfterCalculatingAge)
/* @desc - Creates a model for the adminSchema */
const Admin = model('Admin', modifiedSchema)
export default Admin
