import { getFormById } from '@/app/actions/getFormById'
import FormBuilder from '@/components/FormBuilder'
import React from 'react'


type Props = {
    params: {
        id: string
    }
}

export default async function page({params}: Props) {

    // Get the form
    const {id} = params
    const form = await getFormById(Number(id))

    if(!form) {
        throw new Error("Form not found")
    }
   
  return (
    <FormBuilder form={form}/>
  )
}
