import User from '../../models/user/user.model.js'

const UserController = {
  /* @desc - Create a new user */
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

  /* @desc - Get a user's profile by their id */
  async getUserProfile(req, res) {
    try {
      console.log(req.body)
      const user = await User.findById(req.body._id)
      if (user) {
        res.json([user])
      } else {
        res.status(404)
        throw new Error('User not found')
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
}

export default UserController
