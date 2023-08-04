import express from 'express'
import authController from '../../../../controllers/auth/auth.controller.js'
const authRouter = express.Router()

authRouter.post('/login', authController.login)
authRouter.post('/signup', authController.register)
authRouter.get('/logout', authController.logout)

export default authRouter
