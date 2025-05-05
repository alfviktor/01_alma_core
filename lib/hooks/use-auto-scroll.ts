import { useCallback, useEffect, useRef, useState } from 'react'

interface UseAutoScrollOptions {
  isLoading: boolean
  dependency: number
  isStreaming: () => boolean
  scrollContainer?: React.RefObject<HTMLElement>
  threshold?: number
  intervalMs?: number
}

interface UseAutoScrollReturn {
  anchorRef: React.RefObject<HTMLDivElement>
  isAutoScroll: boolean
  scrollToBottom: () => void
}

/**
 * Custom hook to auto-scroll to a target element and pause when the user scrolls away.
 */
export function useAutoScroll({
  isLoading,
  dependency,
  isStreaming,
  scrollContainer,
  threshold = 200,
  intervalMs = 200
}: UseAutoScrollOptions): UseAutoScrollReturn {
  const anchorRef = useRef<HTMLDivElement>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)

  // Detect user scroll to toggle auto-scroll
  const handleScroll = useCallback(() => {
    if (scrollContainer?.current) {
      const element = scrollContainer.current
      const atBottom =
        element.scrollHeight - element.scrollTop - element.clientHeight <=
        threshold
      setIsAutoScroll(atBottom)
    } else if (typeof window !== 'undefined') {
      const scrollHeight = document.documentElement.scrollHeight
      const atBottom =
        window.innerHeight + window.scrollY >= scrollHeight - threshold
      setIsAutoScroll(atBottom)
    }
  }, [threshold, scrollContainer])

  useEffect(() => {
    if (scrollContainer?.current) {
      const element = scrollContainer.current
      element.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        element.removeEventListener('scroll', handleScroll)
      }
    } else if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
    return undefined
  }, [handleScroll, scrollContainer])

  // Scroll to anchor element
  const scrollToBottom = useCallback(() => {
    if (anchorRef.current) {
      if (scrollContainer?.current) {
        anchorRef.current.scrollIntoView({
          behavior: 'smooth', // Always smooth
          block: 'end'
        })
      } else {
        anchorRef.current.scrollIntoView({
          behavior: 'smooth' // Always smooth
        })
      }
    }
  }, [scrollContainer]) // dependency is no longer needed here for behavior

  // Auto-scroll on updates only (no streaming scroll)
  useEffect(() => {
    if (!isAutoScroll) return
    scrollToBottom()
    
    // No interval for streaming - removed
    return undefined
  }, [
    dependency,
    isAutoScroll,
    scrollToBottom
  ])

  return {
    anchorRef,
    isAutoScroll,
    scrollToBottom
  }
}
