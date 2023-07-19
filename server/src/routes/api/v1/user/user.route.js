import express from 'express'
import UserController from '../../../../controllers/user/user.controller.js'
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
  res.json({
    message: 'getting all users',
  })
})

userRouter.post('/', UserController.createNewUser)

export default userRouter
