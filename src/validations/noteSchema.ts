import { z } from "zod";

const noteSchema = z.object({
  title: z.string().min(1, {message: 'title is required'}),
  content: z.string().min(1, {message: 'content is required'})
})

type TNote = z.infer<typeof noteSchema>

export {noteSchema, type TNote}
