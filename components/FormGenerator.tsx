"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import z from "zod";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

import { generateFormSchema } from "@/schemas/generateFormSchema";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ImSpinner2 } from 'react-icons/im';
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { createForm } from "@/app/actions/createForm";
import {BsFileEarmarkPlus} from 'react-icons/bs';
import { useRouter } from "next/navigation";



export default function FormGenerator() {
  const [open, setOpen] = useState(false);

  const router = useRouter()
  
  const form = useForm<z.infer<typeof generateFormSchema>>({
    resolver: zodResolver(generateFormSchema),
    defaultValues: {
      description: ''
    }
  })


  const handleSubmit = async (data: z.infer<typeof generateFormSchema> ) => {
      const res = await axios.post('http://localhost:3000/api/generate-form', data)

      const createFormData:FormResponse = JSON.parse(res.data) //Data to create the form in the database
      console.log(createFormData)
      try {
        const formId = await createForm(createFormData)
        if(formId) {
          toast.success("Form created successfully")
          router.push(`/builder/${formId}`)
        }
        console.log(formId)
      } catch (error) {
        toast.error("Failed to create form")
        console.log(error)
      }

      
  } 
  



  const onFormCreate = () => {
    return setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={onFormCreate} variant={`outline`} className="group h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer gap-4 rounded border-dashed">
        <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary "/>
        <p className="font-bold text-lg text-muted-foreground group-hover:text-primary">Create new form</p>
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Form</DialogTitle>
          <DialogDescription>Create a new form using AI or manually</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      id="description"
                      required
                      placeholder="Share what your form is about, who is it for, and what information you would like to collect. And AI will do the magic ✨"
                      {...field}
                      className="rounded"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="mt-4">
            <div className="flex justify-between w-full">
              {/* Submit button */}
              <Button className="rounded" type='submit' disabled={form.formState.isSubmitting}>
                {!form.formState.isSubmitting ? 'Create Form' : <ImSpinner2 className="animate-spin"/>}
              </Button>

              {/* Manual button */}
              <Button variant="link" className="text-purple-500 font-semibold">Create Manually</Button>
            </div>
          </DialogFooter>
          </form>

        </Form>
        {/* <form action={formAction}>
          <div className="flex py-4">
            <Textarea
              id="description"
              name="description"
              required
              placeholder="Share what your form is about, who is it for, and what information you would like to collect. And AI will do the magic ✨"
            />
          </div>
          <DialogFooter>
            <div className="flex justify-between w-full">
              <SubmitButton />
              <Button variant="link">Create Manually</Button>
            </div>
          </DialogFooter>
        </form> */}
      </DialogContent>
    </Dialog>
  );
}
