/* @desc - Middleware for handling errors [route not found] */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

/* @desc - Middleware for handling errors [other errors] */
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)

  if (error.name === 'CastError' || error.kind === 'ObjectId') {
    statusCode = 400
    message = 'Resource not found'
  }

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
  })
}

export { errorHandler, notFound }
