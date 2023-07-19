import User from '../../models/user/user.model.js'

const UserController = {
  async createNewUser(req, res) {
    try {
      const user = req.body
      const doesUserExist = await User.findOne({ email: user.email })
      if (doesUserExist) {
        res.status(400)
        throw new Error('User already exists')
      }
      const newUser = await User.create(user)
      if (newUser) {
        res.status(201).json(newUser)
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
}

export default UserController
