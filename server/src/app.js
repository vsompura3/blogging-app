import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

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
app.get('/', (req, res) => {
  res.send('Hello World')
})

export default app
