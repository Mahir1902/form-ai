'use server'

import { generateFormSchema } from '@/schemas/generateFormSchema'
import OpenAI from 'openai'
import z from 'zod'


export async function generateForm(values: z.infer<typeof generateFormSchema>) {

    const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
    })
    console.log('OpenAI API Key:', process.env.NEXT_PUBLIC_OPENAI_API_KEY!);

    console.log(values)

    const prompt = "Based on the description, generate a survey object with 3 fields: name(string) for the form, description(string) of the form and a questions array where every element has 2 fields: text and the fieldType and fieldType can be of these options RadioGroup, Select, Input, Textarea, Switch; and return it in json format. For RadioGroup, and Select types also return fieldOptions array with text and value fields. For example, for RadioGroup, and Select types, the field options array can be [{text: 'Yes', value: 'yes'}, {text: 'No', value: 'no'}] and for Input, Textarea, and Switch types, the field options array can be empty. For example, for Input, Textarea, and Switch types, the field options array can be []"

    // try {
    //     const response = await openai.chat.completions.create({
    //         model: 'gpt-4o',
    //         messages: [
    //             {role: 'system', content: `${value} ${prompt}`}
    //         ]
    //     })

    //     console.log(response.choices)
    //     return {
    //         message: 'success',
    //         data: response.choices[0].message.content
    //     }
    // } catch (error) {
    //     console.log(error)
    //     return {
    //         message: 'An error occured'
    //     }
    // }
}