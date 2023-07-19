import { Schema, model } from 'mongoose'

const reactionSchema = new Schema(
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
    type: {
      type: String,
      enum: ['like', 'dislike', 'love', 'haha', 'wow', 'sad', 'angry'],
      required: true,
    },
  },
  { timestamps: true },
)

const Reaction = model('Reaction', reactionSchema)
export default Reaction
