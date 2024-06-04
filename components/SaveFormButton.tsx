import React from 'react'

import { MdOutlineSaveAlt } from "react-icons/md";
import { Button } from './ui/button';

export default function SaveFormButton() {
  return (
    <Button variant={`outline`} className=' rounded-xl gap-2'>
        <MdOutlineSaveAlt className='h-6 w-6'/>
        Save
    </Button>
  )
}
