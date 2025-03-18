"use client"

import type { ComponentPropsWithoutRef, ElementRef, RefObject } from "react";
import { CheckIcon } from "@radix-ui/react-icons"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

const RadioGroup = (
  {
    ref,
    className,
    ...props
  }: ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    ref: RefObject<ElementRef<typeof RadioGroupPrimitive.Root>>;
  }
) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
}
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = (
  {
    ref,
    className,
    ...props
  }: ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    ref: RefObject<ElementRef<typeof RadioGroupPrimitive.Item>>;
  }
) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow-sm focus:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
