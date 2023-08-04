import bcrypt from 'bcryptjs'
import calculateAge from '../../utils/helpers/calculateAge.js'

/* 
  @desc - The salt value for the hashing algorithm 
*/
const SALT_VALUE = 10

/* 
  @desc - Middleware for the user schema
  @param {Schema} schema - The schema to be used
*/
const userMiddleware = async schema => {
  await hashingPassword(schema)
  await setAgeBasedOnDOB(schema)
  await setPlaceholderPic(schema)
}

/* 
  @desc - Check if password matches the hashed password in the database 
  @param {Schema} schema - The schema to be used
*/
const setAgeBasedOnDOB = async schema => {
  schema.age = calculateAge(schema.dateOfBirth)
}

/* 
  @desc - Check if password matches the hashed password in the database
  @param {Schema} schema - The schema to be used
*/
const setPlaceholderPic = async schema => {
  if (!schema.profilePhoto && schema.gender === 'M') {
    schema.profilePhoto =
      'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg'
  } else if (!schema.profilePhoto && schema.gender === 'F') {
    schema.profilePhoto =
      'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351964-stock-illustration-default-placeholder-woman.jpg'
  } else {
    schema.profilePhoto
  }
}

/* 
  @desc - Check if password matches the hashed password in the database
  @param {Schema} schema - The schema to be used
*/
const hashingPassword = async schema => {
  const salt = await bcrypt.genSalt(SALT_VALUE)
  schema.password = await bcrypt.hash(schema.password, salt)
}

export default userMiddleware
