const z = require('zod');

const userSchema = z.object({ fName: z.string(), lName: z.string(), avatar: z.string().optional() })
const repliesSchema = z.object({
  id: z.string().uuid(),
  date: z.number(),
  user: userSchema,
  text: z.string(),
  likes: z.number(),
  iLikedIt: z.boolean()
})
const getCommentSchema = z.object({
  _id: z.string().uuid(),
  date: z.number(),
  user: userSchema,
  text: z.string(),
  likes: z.number(),
  iLikedIt: z.boolean(),
  replies: z.array(repliesSchema)
})
const createCommentSchema = z.object({
  user: userSchema,
  text: z.string(),
  likes: z.number(),
  isLike: z.boolean(),
  replies: z.array().length(0)
})
const getCommentValidator = ({ data }) => {
  return getCommentSchema.safeParse(data);
}
const createCommentValidator = ({ data }) => {
  return createCommentSchema.safeParse(data);
}
module.exports = { getCommentValidator, createCommentValidator }
