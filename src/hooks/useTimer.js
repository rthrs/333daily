import { useState } from 'react'

export const useTimer = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [currentTimer, setCurrentTimer] = useState(null)

  const startTimer = (category) => {
    // Only allow timer for project category
    if (category !== 'project') return
    
    if (isTimerRunning && currentTimer === category) {
      // Stop current timer
      setIsTimerRunning(false)
      setCurrentTimer(null)
    } else {
      // Start new timer
      setIsTimerRunning(true)
      setCurrentTimer(category)
    }
  }

  const stopTimer = () => {
    setIsTimerRunning(false)
    setCurrentTimer(null)
  }

  return {
    isTimerRunning,
    currentTimer,
    startTimer,
    stopTimer
  }
}
