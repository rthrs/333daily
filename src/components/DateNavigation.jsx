import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { getDateFlags } from '../utils/dateUtils'
import { getBorderStyles, getInputStyles } from '../utils/styleUtils'

const DateNavigation = ({ currentDate, onDateChange }) => {
  const { isDark } = useTheme()

  const dateFlags = getDateFlags(currentDate)
  const borderStyles = getBorderStyles(dateFlags)
  const inputStyles = getInputStyles(dateFlags)

  return (
    <div className="flex items-center justify-center space-x-1">          
      {/* Previous day button */}
      <button
        onClick={() => {
          const prevDate = new Date(currentDate)
          prevDate.setDate(prevDate.getDate() - 1)
          onDateChange(prevDate.toISOString().split('T')[0])
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
        onChange={(e) => onDateChange(e.target.value)}
        className={`input-field w-auto dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 pl-4 ${inputStyles}`}
        style={{
          colorScheme: isDark ? 'dark' : 'light'
        }}
      />

      {/* Next day button */}
      <button
        onClick={() => {
          const nextDate = new Date(currentDate)
          nextDate.setDate(nextDate.getDate() + 1)
          onDateChange(nextDate.toISOString().split('T')[0])
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
