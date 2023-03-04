import { z } from "zod";

export const schema = z.object({
  id: z.number(),
  date: z.number(),
  user: z.object({ name: z.string(), avatar: z.string() }),
  text: z.string(),
  likes: z.number(),
  iLikedIt: z.boolean(),
  replies: z.array(
    z.object({
      id: z.number(),
      date: z.number(),
      user: z.object({ name: z.string(), avatar: z.string() }),
      text: z.string(),
      likes: z.number(),
      iLikedIt: z.boolean(),
    })
  ),
});
