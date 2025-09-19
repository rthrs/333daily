import React from 'react'

const ActionButtons = ({ currentDate, onDateChange, onClearAll }) => {
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

  const borderStyles = getBorderStyles()

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => onDateChange(today)}
        className={`px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 border ${borderStyles}`}
        title="Go to today"
      >
        ✨ Go To Today
      </button>

      <button
        onClick={onClearAll}
        className={`px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 border ${borderStyles}`}
      >
        🗑️ Clear All Tasks
      </button>
    </div>
  )
}

export default ActionButtons
