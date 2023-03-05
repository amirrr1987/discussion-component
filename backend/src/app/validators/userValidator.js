const z = require('zod');
const loginSchema = z.object({
  phone: z.string(),
  password: z.string()
});
const loginValidator = ({ data }) => {
  return loginSchema.safeParse(data);
}
const registerSchema = z
  .object({
    name: z.string(),
    phone: z.string(),
    password: z.string().min(11).max(11),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmpassword"]
  });
const registerValidator = ({ data }) => {
  return registerSchema.safeParse(data);
}
module.exports = { loginValidator, registerValidator }
