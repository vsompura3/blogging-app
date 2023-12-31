import { Schema, model } from 'mongoose'

const commentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
      maxlength: 240,
    },
  },
  { timestamps: true },
)

/* @desc - Creates a model for the commentSchema */
const Comment = model('Comment', commentSchema)
export default Comment
