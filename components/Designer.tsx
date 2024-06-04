'use client'

import React from 'react'
import DesignerSidebar from './DesignerSidebar'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'

export default function Designer() {

    const droppable = useDroppable({
        id: 'drop-area',
        data: {
            isDesignerDropArea: true,
        }
    })


  return (
    <div className='flex h-full w-full'>
        <div className='p-4 w-full'>
            <div className={cn('bg-background h-full max-w-[920px] m-auto rounded-xl flex flex-col items-center justify-start overflow-y-auto flex-1 flex-grow', droppable.isOver && 'ring ring-primary/20')}ref={droppable.setNodeRef}>
                {!droppable.isOver && <p className='text-3xl text-muted-foreground flex flex-grow items-center font-bold'>Drop Here</p>}
                {droppable.isOver && <div className='p-4 w-full'><div className='h-[120px] bg-primary/20 rounded-[0.35rem]'></div></div>}
            </div>
        </div>
        <DesignerSidebar/>
    </div>
  )
}
