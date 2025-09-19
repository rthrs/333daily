import React, { createContext, useContext, useState } from 'react'
import { getToday } from '../utils/dateUtils'

const DateContext = createContext()

export const useDateContext = () => {
  const context = useContext(DateContext)
  
  if (!context) {
    throw new Error('useDateContext must be used within a DateProvider')
  }
  
  return context
}

export const DateProvider = ({ children, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(getToday())

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate)
    onDateChange && onDateChange(newDate)
  }

  const goToToday = () => {
    handleDateChange(getToday())
  }

  const goToYesterday = () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    handleDateChange(yesterday.toISOString().split('T')[0])
  }

  const goToTomorrow = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    handleDateChange(tomorrow.toISOString().split('T')[0])
  }

  const goToPreviousDay = () => {
    const prevDate = new Date(currentDate)
    prevDate.setDate(prevDate.getDate() - 1)
    const newDate = prevDate.toISOString().split('T')[0]
    handleDateChange(newDate)
    return newDate
  }

  const goToNextDay = () => {
    const nextDate = new Date(currentDate)
    nextDate.setDate(nextDate.getDate() + 1)
    const newDate = nextDate.toISOString().split('T')[0]
    handleDateChange(newDate)
    return newDate
  }

  const value = {
    currentDate,
    setCurrentDate,
    handleDateChange,
    goToToday,
    goToYesterday,
    goToTomorrow,
    goToPreviousDay,
    goToNextDay
  }

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  )
}
