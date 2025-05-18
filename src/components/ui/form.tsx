import { Root } from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext
} from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { createContext, useContext, useId } from 'react'

const Form = FormProvider

type TFormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = createContext<TFormFieldContextValue>(
  {} as TFormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

type TFormItemContextValue = {
  id: string
}

const FormItemContext = createContext<TFormItemContextValue>(
  {} as TFormItemContextValue
)

const FormItem = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  )
}

const FormLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof Root>) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

const FormControl = ({ ...props }: React.ComponentProps<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

const FormDescription = ({
  className,
  ...props
}: React.ComponentProps<'p'>) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      id={formDescriptionId}
      className={cn('text-muted-foreground text-[0.8rem]', className)}
      data-slot='form-description'
      {...props}
    />
  )
}

const FormMessage = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      id={formMessageId}
      className={cn('text-destructive text-[0.8rem] font-medium', className)}
      data-slot='form-message'
      {...props}
    >
      {body}
    </p>
  )
}

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField
}
