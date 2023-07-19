import { Schema, model } from 'mongoose'
import slugifyPostTitle from '../../middleware/post/post.midleware.js'

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    body: {
      type: String,
      required: true,
      trim: true,
      maxlength: 3000,
    },
    thumbnail: {
      data: Buffer,
      contentType: String,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: true,
      },
    ],
    slug: {
      type: String,
      lowercase: true,
      index: true,
      unique: true,
    },
  },
  { timestamps: true },
)

/* 
  @desc - Create a slug from the post title
*/
const modifiedSchema = slugifyPostTitle(postSchema)
const Post = model('Post', modifiedSchema)
export default Post
