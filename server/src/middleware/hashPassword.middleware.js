import bcrypt from 'bcryptjs'

const SALT_VALUE = 10
async function hashingPassword(schema) {
  schema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next()
    }
    const salt = await bcrypt.genSalt(SALT_VALUE)
    this.password = bcrypt.hash(this.password, salt)
  })

  /* 
    @desc - Check if password matches the hashed password in the database
  */
  schema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }

  return schema
}

export default hashingPassword
