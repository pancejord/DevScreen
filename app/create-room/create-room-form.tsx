'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    name: z.string().min(1).max(50),
    description: z.string().min(1).max(50),
    language: z.string().min(1).max(50),
    githubRepo: z.string().min(1).max(50),
  })


export function CreateRoomForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          description: "",
          githubRepo: "",
          language: "",

        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

      return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input  {...field} />
                </FormControl>
                <FormDescription>
                  Please enter a room name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input  {...field} />
                </FormControl>
                <FormDescription>
                  Please describe your room.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <FormControl>
                  <Input  {...field} />
                </FormControl>
                <FormDescription>
                  Please list languages used.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="githubRepo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHubRepo</FormLabel>
                <FormControl>
                  <Input  {...field} />
                </FormControl>
                <FormDescription>
                  Please enter GitHubRepo Link for the project
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      )


}