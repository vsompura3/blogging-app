import bcrypt from 'bcryptjs'
import { differenceInYears } from 'date-fns'

const SALT_VALUE = 10
const userMiddleware = async (schema, next) => {
  console.log(this)
  // if (!this.proficePhoto && this.gender === 'F') {
  //   this.profilePhoto = '../assets/images/female-user-placeholder.webp'
  // } else if (!this.proficePhoto && this.gender === 'M') {
  //   this.profilePhoto = '../assets/images/male-user-placeholder.webp'
  // } else {
  //   this.profilePhoto = this.profilePhoto
  // }
  await setPlaceholderPic(schema)
  // this.age = differenceInYears(new Date(), this.dateOfBirth)
  await calculateAge(schema)
  // const salt = await bcrypt.genSalt(SALT_VALUE)
  // this.password = bcrypt.hash(this.password, salt)
  await hashingPassword(schema)
}

/* 
  @desc - Check if password matches the hashed password in the database 
  @param {Schema} schema - The schema to be used
  @returns {Schema} - The schema with the calculateAge middleware
*/
const calculateAge = async schema => {
  schema.age = differenceInYears(new Date(), schema.dateOfBirth)
}

/* 
  @desc - Check if password matches the hashed password in the database
  @param {Schema} schema - The schema to be used
  @returns {Schema} - The schema with the setPlaceholderPic middleware
*/
const setPlaceholderPic = async schema => {
  if (!schema.profilePhoto && schema.gender === 'F') {
    schema.profilePic = '../assets/images/female-user-placeholder.webp'
  } else if (!schema.profilePhoto && schema.gender === 'M') {
    schema.profilePic = '../assets/images/male-user-placeholder.webp'
  } else {
    schema.profilePhoto
  }
}

/* 
  @desc - Check if password matches the hashed password in the database
  @param {Schema} schema - The schema to be used
  @returns {Schema} - The schema with the hashingPassword middleware
*/
const hashingPassword = async schema => {
  const salt = await bcrypt.genSalt(SALT_VALUE)
  schema.password = bcrypt.hash(schema.password, salt)
}

export default userMiddleware
