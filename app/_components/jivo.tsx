import { useEffect } from 'react'

export default function JivoChatWidget() {
  useEffect(() => {
    const widget_id = '4mwghIbKQO'
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = `https://code.jivochat.com/widget/${widget_id}`
    document.body.appendChild(s)
  }, [])

  return null
}