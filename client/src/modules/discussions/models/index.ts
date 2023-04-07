import { z } from "zod";
export const userSchema = z.object({
  _id: z.string(),
  fName: z.string(),
  lName: z.string(),
  avatar: z.string(),
});
const repliesSchema = z.object({
  user: userSchema,
  _id: z.string(),
  text: z.string(),
  likes: z.number(),
  isLike: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export const commentSchema = 
  z.object({
    _id: z.string(),
    user: userSchema,
    text: z.string(),
    likes: z.number(),
    isLike: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    replies: z.array(repliesSchema),
  })

export type User = z.infer<typeof userSchema>;
export type Replies = z.infer<typeof repliesSchema>;
export type Comment = z.infer<typeof commentSchema>;
