import User from '../../models/user/user.model.js'

const UserController = {
  /* @desc - Create a new user */
  async createNewUser(req, res) {
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
        res.status(201).json(newUser)
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  /* @desc - Get a user's profile by their username */
  async getUserProfile(req, res) {
    try {
      const user = await User.findOne({ username: req.params.username })
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

  /* @desc - Update a user's profile by their username */
  async updateUserProfile(req, res) {
    try {
      const user = await User.findOne({ username: req.params.username })
      if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.username = req.body.username || user.username
        user.password = req.body.password || user.password
        user.profilePhoto = req.body.profilePhoto || user.profilePhoto
        user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth
        user.bio = req.body.bio || user.bio
        user.gender = req.body.gender || user.gender
        const updatedUser = await user.save()
        res.json({ message: 'Account updated successfully', updatedUser })
      } else {
        res.status(404)
        throw new Error(
          `There is no user with the username ${req.body.username}`,
        )
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  /* @desc - Delete a user's profile by their username */
  async deleteUser(req, res) {
    try {
      const user = await User.findOne({ username: req.params.username })
      if (user) {
        await user.deleteOne({ username: req.params.username })
        res.json({ message: 'Account deleted successfully' })
      } else {
        res.status(404)
        throw new Error(
          `There is no user with the username '${req.params.username}'`,
        )
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
}

export default UserController
