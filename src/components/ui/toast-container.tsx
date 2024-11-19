import { Toaster } from 'react-hot-toast'

const ToastContainer = () => {
  return (
    <Toaster
      reverseOrder={false}
      position='top-right'
      toastOptions={{ duration: 2500 }}
    />
  )
}

export default ToastContainer
