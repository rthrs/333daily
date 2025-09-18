import { useState, useEffect } from 'react'

export const useTimer = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [currentTimer, setCurrentTimer] = useState(null)
  const [timerStartTime, setTimerStartTime] = useState(null)

  const startTimer = (category) => {
    // Only allow timer for project category
    if (category !== 'project') return
    
    if (isTimerRunning && currentTimer === category) {
      // Stop current timer
      setIsTimerRunning(false)
      setCurrentTimer(null)
      setTimerStartTime(null)
    } else {
      // Start new timer
      setIsTimerRunning(true)
      setCurrentTimer(category)
      setTimerStartTime(Date.now())
    }
  }

  const stopTimer = () => {
    setIsTimerRunning(false)
    setCurrentTimer(null)
    setTimerStartTime(null)
  }

  return {
    isTimerRunning,
    currentTimer,
    timerStartTime,
    startTimer,
    stopTimer
  }
}
