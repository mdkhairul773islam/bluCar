import { format } from 'date-fns'

export default function dateFormat(dateParams: Date) {
  const date = new Date(dateParams)
  const now = new Date()

  const diffInMilliseconds = now.getTime() - date.getTime()
  const diffInSeconds = diffInMilliseconds / 1000
  const diffInMinutes = diffInSeconds / 60
  const diffInHours = diffInMinutes / 60
  const diffInDays = diffInHours / 24

  if (diffInSeconds < 60) {
    return `${Math.abs(Math.floor(diffInSeconds))} seconds ago`
  } else if (diffInMinutes < 60) {
    return `${Math.abs(Math.floor(diffInMinutes))} minutes ago`
  } else if (diffInHours < 24) {
    return `${Math.abs(Math.floor(diffInHours))} hours ago`
  } else if (diffInDays < 3) {
    return `${Math.abs(Math.floor(diffInDays))} days ago`
  } else {
    return format(date, 'dd/MM/yyyy')
  }
}
