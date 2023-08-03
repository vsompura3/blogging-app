import express from 'express'
import UserController from '../../../../controllers/user/user.controller.js'
const userRouter = express.Router()

userRouter.get('/profile/:id', UserController.getUserProfile)
userRouter.post('/', UserController.createNewUser)

export default userRouter
