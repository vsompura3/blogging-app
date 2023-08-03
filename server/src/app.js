import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { errorHandler, notFound } from './middleware/error/error.middleware.js'
import authRouter from './routes/api/v1/auth/auth.route.js'
import postRouter from './routes/api/v1/post/post.route.js'
import userRouter from './routes/api/v1/user/user.route.js'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('combined'))
app.use('/api/v1/posts', postRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.get('/', (req, res) => {
  res.json({ message: 'Yippee-Ki-Yay, Sergent!' })
})
app.use(notFound)
app.use(errorHandler)

export default app
