'use client'

import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'
import { SideBarElementDragOverlay } from './SideBarElement'
import { FieldType, FormFields } from './FormFields'

export default function DragOverlayWrapper() {

    const [draggedItem, setDraggedItem] = useState<Active | null>(null)

    // Check if there are dragged elemnts
    useDndMonitor({
        onDragStart: (event) => {
            console.log('Drag started', event)
            setDraggedItem(event.active)
        },
        onDragCancel(event) {
            console.log('Drag cancelled', event)
            setDraggedItem(null)
        },
        onDragEnd(event) {
            console.log('Drag ended', event)
            setDraggedItem(null)
        },
    })

    if(draggedItem === undefined || !draggedItem) return null

    const isSideBarButtonElement = draggedItem.data?.current?.isSideBarElement
    let node = <div>No drag overlay</div>

    if(isSideBarButtonElement) {
        const fieldType = draggedItem.data?.current?.type as FieldType
        node = <SideBarElementDragOverlay formField={FormFields[fieldType]}/>
    }

  return (
    <DragOverlay>{node}</DragOverlay>
  )
}
