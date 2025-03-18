import { Metadata } from 'next'
import LoginForm from './_components/login-form'

export const metadata: Metadata = {
  title: 'Login'
}

const LoginPage = () => {
  return <div className='min-h-screen flex items-center justify-center'>
    <LoginForm/>
  </div>
}

export default LoginPage
