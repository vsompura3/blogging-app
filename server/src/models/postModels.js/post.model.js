import { Schema } from 'mongoose'

const postSchema = new Schema({
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
    unique: true,
    index: true,
  },
})
