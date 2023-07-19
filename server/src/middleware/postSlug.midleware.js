import slugify from 'slugify'

function slugifyPostTitle(schema, options) {
  schema.pre('save', function (next) {
    this.slug = slugify(this.title, options)
    next()
  })
  return schema
}

export default slugifyPostTitle
