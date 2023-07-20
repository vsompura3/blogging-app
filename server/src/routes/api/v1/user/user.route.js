import express from 'express'
import UserController from '../../../../controllers/user/user.controller.js'
const userRouter = express.Router()

// TODO: separate the routing concerns
// ! The below route is just experimental
// userRouter.get('/', UserController.getUserProfile)

userRouter.post('/', UserController.createNewUser)

export default userRouter
