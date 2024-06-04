import React from 'react'
import { Button } from './ui/button'
import { MdPublish } from "react-icons/md";

export default function PublishFormButton() {
  return (
    <Button className='rounded-xl gap-2 border'>
        <MdPublish className='h-6 w-6'/>
        Publish
    </Button>
  )
}
