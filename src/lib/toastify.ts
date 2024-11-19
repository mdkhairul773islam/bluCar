import toast from 'react-hot-toast'

const options = {
  id: 'toast'
}

const toastify = {
  success(message: string) {
    toast.success(message, options)
  },

  error(message: string) {
    toast.error(message, options)
  }
}

export default toastify
