import express from 'express'
const authRouter = express.Router()

authRouter.post('/login', (req, res) => {
  res.send('logged in')
})

export default authRouter
