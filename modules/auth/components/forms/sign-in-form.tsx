'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import AuthButton from '@/components/loading/auth-loading'
import TextField from '@/components/fields/text-field'

import { useAuthSignIn } from '../../hooks/useAuthSignin'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').regex(passwordRegex, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
})

type SignInFormSchema = z.infer<typeof signInSchema>

export const SignInForm = () => {
  const { triggerSignIn, isPending } = useAuthSignIn()

  const methods = useForm<SignInFormSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (values: z.infer<typeof signInSchema>) => {
    triggerSignIn(values)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TextField name="email" label="Email address" placeholder="jhondou@gmail.com" required />
        <TextField name="password" label="Password" placeholder="Enter your password" required />
        <AuthButton isPending={isPending} type="submit" title={'Sign Up'} />
      </form>
    </Form>
  )
}
