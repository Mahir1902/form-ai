
import z from 'zod'


export const generateFormSchema = z.object({
    description: z.string().min(1)
})

export const fieldOptionSchema = z.object({
    text: z.string(),
    value: z.string()
  });
  
  // Define a schema for each question
  export const questionSchema = z.object({
    text: z.string(),
    fieldType: z.enum(['RADIO_GROUP', 'SELECT', 'INPUT', 'TEXTAREA', 'SWITCH']),
    fieldOptions: z.array(fieldOptionSchema).optional() // This can be an optional field depending on fieldType
  });

  export const createFormSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    questions: z.array(questionSchema)
  })