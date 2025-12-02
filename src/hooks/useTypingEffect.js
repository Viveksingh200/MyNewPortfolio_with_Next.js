'use client'
import { useState, useEffect } from 'react'

export default function useTypingEffect(text, speed = 50, delay = 0) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    let timeoutId

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)

      timeoutId = interval
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      if (timeoutId) clearInterval(timeoutId)
    }
  }, [text, speed, delay])

  return { displayedText, isComplete }
}