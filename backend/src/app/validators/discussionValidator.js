const z = require('zod');

const userSchema = z.object({ name: z.string(), avatar: z.string().optional() })
const repliesSchema = z.object({
  id: z.string().uuid(),
  date: z.number(),
  user: userSchema,
  text: z.string(),
  likes: z.number(),
  iLikedIt: z.boolean()
})
const getDiscussionSchema = z.object({
  _id: z.string().uuid(),
  date: z.number(),
  user: userSchema,
  text: z.string(),
  likes: z.number(),
  iLikedIt: z.boolean(),
  replies: z.array(repliesSchema)
})
const createDiscussionSchema = z.object({
  date: z.number(),
  user: userSchema,
  text: z.string(),
  likes: z.number(),
  iLikedIt: z.boolean(),
  replies: z.array(repliesSchema)
})
const getDiscussionValidator = ({ data }) => {
  return getDiscussionSchema.safeParse(data);
}
const createDiscussionValidator = ({ data }) => {
  return createDiscussionSchema.safeParse(data);
}
module.exports = { getDiscussionValidator, createDiscussionValidator }
