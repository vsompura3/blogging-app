import express from 'express'
const authRouter = express.Router()

authRouter.post('/login', (req, res) => {
  res.json({ message: 'logged in' })
})

export default authRouter
