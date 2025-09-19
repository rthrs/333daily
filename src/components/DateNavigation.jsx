import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags } from '../utils/dateUtils'
import { getBorderStyles, getInputStyles } from '../utils/styleUtils'

const DateNavigation = ({ onDateChange }) => {
  const { isDark } = useTheme()
  const { currentDate, goToPreviousDay, goToNextDay, handleDateChange } = useDateContext()
  
  const dateFlags = getDateFlags(currentDate)
  const borderStyles = getBorderStyles(dateFlags)
  const inputStyles = getInputStyles(dateFlags)

  const handleDateInputChange = (newDate) => {
    handleDateChange(newDate)
    onDateChange && onDateChange(newDate)
  }

  return (
    <div className="flex items-center justify-center space-x-1">          
      {/* Previous day button */}
      <button
        onClick={() => {
          const newDate = goToPreviousDay()
          onDateChange && onDateChange(newDate)
        }}
        className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border ${borderStyles}`}
        title="Previous day"
      >
        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <input
        type="date"
        id="date"
        value={currentDate}
        onChange={(e) => handleDateInputChange(e.target.value)}
        className={`input-field w-auto dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 pl-4 ${inputStyles}`}
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
        className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border ${borderStyles}`}
        title="Next day"
      >
        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default DateNavigation
