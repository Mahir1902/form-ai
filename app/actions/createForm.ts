'use server'

import prisma from "@/lib/prisma";
import { createFormSchema, questionSchema } from "@/schemas/generateFormSchema";
import { currentUser } from "@clerk/nextjs/server";
import z from "zod";

export async function createForm(data: z.infer<typeof createFormSchema>) {
  const validation =  createFormSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("Invalid input");
  }


  const user = await currentUser();

  console.log(user);

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { name, description, questions } = validation.data;

  const form = await prisma.form.create({
    data: {
      userId: user.id,
      name,
      description,
      questions: {
        create: questions.map((question) => ({
          text: question.text,
          fieldType: question.fieldType,
          fieldOptions: {
            create: question.fieldOptions || [],
          },
        })),
      },
    },
  });

  if (!form) {
    throw new Error("Could not create form");
  }

  return form.id;
}
