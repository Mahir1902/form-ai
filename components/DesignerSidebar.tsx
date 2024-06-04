import React from 'react'

import { FormFields } from './FormFields'
import SideBarElement from './SideBarElement'

export default function DesignerSidebar() {
  return (
    <aside className='w-[400px] max-w-[400px] flex flex-col bg-background h-full flex-grow border-l-2 border-muted p-4 overflow-y-auto'>
        <SideBarElement formField={FormFields.TextField}/>
    </aside>
  )
}
