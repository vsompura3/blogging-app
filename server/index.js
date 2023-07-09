import express from 'express'
const app = express()
import * as dotenv from 'dotenv'
dotenv.config()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('express working!')
})

app.listen(PORT, () => {
  console.log(`Running on port ${PORT} and env is ${process.env.BASE_URL}`)
})

export default app
