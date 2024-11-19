"use client";

import React from "react";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  joining_date: z.date(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  showroom: z.string(),
  designation: z.string(),
  address: z.string(),
  permanent_address: z.string(),
  salary: z.coerce.number(),
  overtime: z.coerce.number(),
  email: z.string(),
  image: z.string(),
  gender: z.string(),
  mobile: z.string(),
});

const CreateEmployeeForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      joining_date: new Date(),
      showroom: "",
      name: "",
      designation: "",
      address: "",
      permanent_address: "",
      salary: 0,
      email: "",
      mobile: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5 items-start">
            {/* Joining Date */}
            <FormField
              control={form.control}
              name="joining_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Joining Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto size-4 text-[#5A6272]" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select Showroom */}
            <FormField
              control={form.control}
              name="showroom"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Select Showroom</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Showroom" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          {
                            value: "Showroom 01",
                            label: "Showroom 01",
                          },
                          { value: "Showroom 02", label: "Showroom 02" },
                          { value: "Showroom 03", label: "Showroom 03" },
                        ].map(({ value, label }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Employee Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col">Employee name</FormLabel>
                  <FormControl>
                    <Input placeholder="Employee name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email id  */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col">Email ID</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mobile  */}
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col">Mobile No</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Mobile No" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Employee Designation */}
            <FormField
              control={form.control}
              name="designation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col">Designation</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Designation" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          { value: "Designer", label: "Designer" },
                          { value: "Marketer", label: "Marketer" },
                          { value: "Developer", label: "Developer" },
                        ].map(({ value, label }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Present Address  */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col">
                    Present Address
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Permanent Address  */}
            <FormField
              control={form.control}
              name="permanent_address"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <FormLabel>Permanent Address</FormLabel>
                    <Label className="flex items-center gap-1 text-primary/70">
                      <Checkbox />
                      Same as Present Address
                    </Label>
                  </div>
                  <FormControl>
                    <Textarea placeholder="Permanent Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Salary  */}
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Basic Salary</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Salary" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Overtime  */}
            <FormField
              control={form.control}
              name="overtime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col">Overtime</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Overtime" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gender  */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col">Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center space-y-1 gap-3"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0 ">
                        <FormControl>
                          <RadioGroupItem value="gender" />
                        </FormControl>
                        <FormLabel className="font-normal  cursor-pointer">
                          Gender
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Female
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image  */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col">Image</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-[#00875A]">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default CreateEmployeeForm;
