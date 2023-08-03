import express from 'express'
import UserController from '../../../../controllers/user/user.controller.js'
const userRouter = express.Router()

userRouter.post('/register', UserController.createNewUser)
userRouter.get('/:username', UserController.getUserProfile)
userRouter.put('/:username', UserController.updateUserProfile)
userRouter.delete('/:username/delete', UserController.deleteUser)

export default userRouter
