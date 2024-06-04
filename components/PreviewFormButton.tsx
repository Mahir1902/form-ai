import React from 'react'
import { Button } from './ui/button'
import {MdPreview} from 'react-icons/md'

export default function PreviewFormButton() {
  return (
    <Button variant={`outline`} className=' rounded-xl gap-2'>
        <MdPreview className='h-6 w-6'/>
        Preview
    </Button>
  )
}
