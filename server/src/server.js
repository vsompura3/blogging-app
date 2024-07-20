import * as dotenv from 'dotenv'
import http from 'http'
import app from './app.js'
// import connectDB from './config/db.js'
const server = http.createServer(app)
const PORT = process.env.PORT || 8000
dotenv.config()

// await connectDB()
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
