import User from '../../models/user/user.model.js'

const authController = {
  /* @desc - create a user account */
  async register(req, res) {
    try {
      const user = req.body
      const doesUserExist = await User.findOne({ email: user.email })
      const isUsernameTaken = await User.findOne({ username: user.username })
      if (doesUserExist) {
        res.status(400)
        throw new Error('User already exists')
      }
      if (isUsernameTaken) {
        res.status(400)
        throw new Error('Username is already taken. Please try another one.')
      }
      const newUser = await User.create(user)
      if (newUser) {
        res
          .status(201)
          .json({ message: 'Account created successfully', newUser })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  /* @desc - login a user */
  async login(req, res) {
    const { username, password } = req.body
    if (!username || !password) {
      res.status(400)
      throw new Error('Please provide username and password')
    }
    const foundUser = await User.findOne({ username: username })
  },

  /* @desc - logout a user */
  async logout(req, res) {
    res.send('logout')
  },
}

export default authController
