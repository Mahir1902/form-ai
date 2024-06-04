'use client'

import { Form } from "@prisma/client";
import React from "react";
import PreviewFormButton from "./PreviewFormButton";
import PublishFormButton from "./PublishFromButton";
import SaveFormButton from "./SaveFormButton";
import Designer from "./Designer";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";

type Props = {
  form: Form;
};

export default function FormBuilder({ form }: Props) {
  return (
    <DndContext>
      <main className="border flex w-full flex-col">
        <div className="border-b p-4 gap-3 flex items-center justify-between ">
          <h2>
            <span className="text-muted-foreground">Form: </span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewFormButton />
            {!form.published && (
              <>
                <SaveFormButton />
                <PublishFormButton />
              </>
            )}
          </div>
        </div>
        <div className="border w-full flex bg-[url(/paper.svg)] flex-grow place-items-center justify-center relative overflow-y-auto h-[200px] bg-accent">
          <Designer/>
        </div>
      </main>
      <DragOverlayWrapper/>
    </DndContext>
  );
}
