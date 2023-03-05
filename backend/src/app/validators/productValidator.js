const z = require('zod');
const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  imageUrl: z.string(),
  quantity: z.number(),
  createdAt: z.string()
});
const productValidator = ({ data }) => {
  return productSchema.safeParse(data);
}

module.exports = { productValidator }
