
import z from 'zod'


export const generateFormSchema = z.object({
    description: z.string().min(1)
})