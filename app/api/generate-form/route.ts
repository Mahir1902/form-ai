import { NextResponse } from "next/server";
import OpenAI from "openai";
import { generateFormSchema } from "@/schemas/generateFormSchema";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req:Request) {
    

    const body = await req.json()

    const parseResult = generateFormSchema.safeParse(body)

    if(!parseResult.success) {
        return NextResponse.json({error: 'Invalid input'}, {status: 400})
    }

    const {description} = parseResult.data

    const prompt = "Based on the description, generate a survey object with 3 fields: name(string) for the form, description(string) of the form and a questions array where every element has 2 fields: text and the fieldType and fieldType can be of these options RADIO_GROUP, SELECT, INPUT, TEXTAREA, SWITCH; and return it in json format. For RADIO_GROUP, and SELECT types also return fieldOptions array with text and value fields. For example, for RadioGroup, and Select types, the field options array can be [{text: 'Yes', value: 'yes'}, {text: 'No', value: 'no'}] and for Input, Textarea, and Switch types, the field options array can be empty. For example, for Input, Textarea, and Switch types, the field options array can be []"

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {role: 'system', content: `${description} ${prompt}`}
        ]
    })

    

    return NextResponse.json(completion.choices[0].message.content, {status: 200})
}