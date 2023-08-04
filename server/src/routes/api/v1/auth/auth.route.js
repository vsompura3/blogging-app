import express from 'express'
const authRouter = express.Router()

authRouter.post('/login', (req, res) => {
  res.json({ message: 'logged in' })
})

authRouter.post('/signup', (req, res) => {
  res.json({ message: 'signed up' })
})

authRouter.get('/logout', (req, res) => {
  res.json({ message: 'logged out' })
})

export default authRouter
