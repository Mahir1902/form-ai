"use client";

import React from "react";
import { FormField } from "./FormFields";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

type Props = { formField: FormField };

export default function SideBarElement({ formField }: Props) {
  const { label, icon: Icon } = formField.designerButton;

  const draggable = useDraggable({
    id: `designer-btn-${formField.type}`,
    data: {
      type: formField.type,
      isSideBarElement: true,
    },
  });

  return (
    <Button
      variant={`outline`}
      className={cn("flex flex-col gap-2 h-[120px] w-[120px] cursor-grab rounded-[0.5rem]", draggable.isDragging && 'ring-2 ring-primary')}
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      {...draggable.listeners}
    >
      <Icon className="h-8 w-8 cursor-grab text-primary" />
      <p>{label}</p>
    </Button>
  );
}

// style when dragging the element
export function SideBarElementDragOverlay({ formField }: Props) {
  const { label, icon: Icon } = formField.designerButton;

  return (
    <Button
      variant={`outline`}
      className={"flex flex-col gap-2 h-[120px] w-[120px] cursor-grab rounded-[0.5rem]"}
      
    >
      <Icon className="h-8 w-8 cursor-grab text-primary" />
      <p>{label}</p>
    </Button>
  );
}
