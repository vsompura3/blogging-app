import express from 'express'
const postRouter = express.Router()

postRouter.get('/', (req, res) => {
  res.json({
    message: 'getting all posts',
  })
})

postRouter.get('/:postId', (req, res) => {
  res.json({
    message: 'getting post by id',
  })
})

export default postRouter
