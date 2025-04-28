import z from 'zod'

const singUpSchema = z.object({
  name: z.string().min(1, {message: 'name is required'}).min(3, {message: 'name should be more than 3 chars'}).max(20,{message: 'name should be less than 20 chars'}),
  email: z.string().min(1, {message: 'email is required'}).email(),
  password: z.string().min(1, {message: 'password is required'}).min(8, {message: 'password should be at least 8 chars'}).regex(/^[A-Z][a-z0-9]{8,}$/, {message: 'password should be contains capital letter'}),
  age: z.coerce.number().min(1, {message: 'age is required'}).min(18, {message: 'age should be greater than 18'}).max(50, {message: 'age should be less than 50'}),
  phone: z.string().min(1, {message: 'phone is required'}).regex(/^01[0125][0-9]{8}$/, {message: 'accept only egyptian phones'})
})

type TSignUpType = z.infer<typeof singUpSchema>

export {singUpSchema, type TSignUpType}
