import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags, getDayLabel } from '../utils/dateUtils'
import { getDayStyles, getInputStyles } from '../utils/styleUtils'

const DateNavigation = ({ onDateChange }) => {
  const { isDark } = useTheme()
  const { currentDate, goToPreviousDay, goToNextDay, handleDateChange } = useDateContext()
  
  const dateFlags = getDateFlags(currentDate)
  const dayStyles = getDayStyles(dateFlags)
  const inputStyles = getInputStyles(dateFlags)

  const handleDateInputChange = (newDate) => {
    handleDateChange(newDate)
    onDateChange && onDateChange(newDate)
  }

  return (
    <div className="card space-y-2">
      <h2 className="text-center text-2xl font-bold">
        {getDayLabel(dateFlags)}
      </h2>
      
    <div className="flex items-center justify-center space-x-2">          
      {/* Previous day button */}
      <button
        onClick={() => {
          const newDate = goToPreviousDay()
          onDateChange && onDateChange(newDate)
        }}
        className={`${dayStyles.border} ${dayStyles.background}  hover:opacity-80 font-medium py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer border h-14 flex items-center justify-center`}
        title="Previous day"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <input
        type="date"
        id="date"
        value={currentDate}
        onChange={(e) => handleDateInputChange(e.target.value)}
        className={`input-field w-auto pl-4 ${inputStyles} h-14`}
        style={{
          colorScheme: isDark ? 'dark' : 'light'
        }}
      />

      {/* Next day button */}
      <button
        onClick={() => {
          const newDate = goToNextDay()
          onDateChange && onDateChange(newDate)
        }}
        className={`${dayStyles.border} ${dayStyles.background}  hover:opacity-80 font-medium py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer border h-14 flex items-center justify-center`}
        title="Next day"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </div>
  )
}

export default DateNavigation
