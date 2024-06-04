import { getForms } from '@/app/actions/getForms'
import React from 'react'
import FormCard from './FormCard'

export default async function FormCards() {
  const forms = await getForms()

  return (
    <>
        {forms.map(form => (
            <FormCard key={form.id} form={form}/>
        ))}
    
    </>
  )
}
