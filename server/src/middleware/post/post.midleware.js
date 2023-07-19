import slugify from 'slugify'

/* 
  @desc - Check if password matches the hashed password in the database
  @param {Schema} schema - The schema to be used
  @param {Object} options - The options to be used
  @returns {Schema} - The schema with the slugifyPostTitle middleware
*/
function slugifyPostTitle(
  schema,
  options = { lower: true, remove: /[*+~.()'"!:@]/g },
) {
  schema.pre('save', function (next) {
    this.slug = slugify(this.title, options)
    next()
  })
  return schema
}

export default slugifyPostTitle
