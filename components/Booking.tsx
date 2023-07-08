"use client"

import Link from "next/link"
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
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {useForm} from "react-hook-form";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    },),
    email: z.string().email({message: "Please enter a valid email."}),
    phone: z.string().min(10, {message: "Please enter a valid phone number."}),
})

export default function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <div className={''}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="MadMax" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter your full name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField name={"email"} control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="madmax@lol.com" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter your email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField name={"phone"} control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="+10000001231" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>

                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Form>
    )
}
