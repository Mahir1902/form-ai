"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { generateForm } from "@/actions/generateForm";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import { set } from "date-fns";
import { useForm } from "react-hook-form";
import { generateFormSchema } from "@/schemas/generateFormSchema";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import axios from 'axios'

//Submit button component
const SubmitButton = () => {
  return (
    <Button type="submit" className="rounded">
      Create Form
    </Button>
  );
};



export default function FormGenerator() {
  const [open, setOpen] = useState(false);
  
  const form = useForm<z.infer<typeof generateFormSchema>>({
    resolver: zodResolver(generateFormSchema),
    defaultValues: {
      description: ''
    }
  })


  const handleSubmit = async (data: z.infer<typeof generateFormSchema> ) => {
      const res = await axios.post('http://localhost:3000/api/generate-form', data)

      console.log(res)
  } 
  



  const onFormCreate = () => {
    return setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={onFormCreate} className="rounded">
        Create Form
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Form</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      id="description"
                      required
                      placeholder="Share what your form is about, who is it for, and what information you would like to collect. And AI will do the magic ✨"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="mt-4">
            <div className="flex justify-between w-full">
              <SubmitButton />
              <Button variant="link">Create Manually</Button>
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
