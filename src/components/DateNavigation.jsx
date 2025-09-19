import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const DateNavigation = ({ currentDate, onDateChange }) => {
  const { isDark } = useTheme()
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  
  const isToday = currentDate === today
  const isYesterday = currentDate === yesterday
  const isTomorrow = currentDate === tomorrow
  const isPast = new Date(currentDate) < new Date(today)
  const isFuture = new Date(currentDate) > new Date(today)

  const getBorderStyles = () => {
    if (isToday) return 'border-green-300 dark:border-green-600'
    if (isYesterday) return 'border-orange-300 dark:border-orange-600'
    if (isTomorrow) return 'border-blue-300 dark:border-blue-600'
    if (isPast) return 'border-yellow-300 dark:border-yellow-600'
    return 'border-purple-300 dark:border-purple-600'
  }

  const getInputStyles = () => {
    if (isToday) return 'border-green-300 dark:border-green-600 focus:border-green-500 dark:focus:border-green-400 focus:ring-green-500 dark:focus:ring-green-400'
    if (isYesterday) return 'border-orange-300 dark:border-orange-600 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500 dark:focus:ring-orange-400'
    if (isTomorrow) return 'border-blue-300 dark:border-blue-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400'
    if (isPast) return 'border-yellow-300 dark:border-yellow-600 focus:border-yellow-500 dark:focus:border-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-400'
    return 'border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400'
  }

  const borderStyles = getBorderStyles()
  const inputStyles = getInputStyles()

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
