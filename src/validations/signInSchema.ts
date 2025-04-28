import z from 'zod'

const singInSchema = z.object({
  email: z.string().min(1, {message: 'email is required'}).email(),
  password: z.string().min(1, {message: 'password is required'})
})

type TSignInType = z.infer<typeof singInSchema>

export {singInSchema, type TSignInType}
