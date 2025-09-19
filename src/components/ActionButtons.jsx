import React from 'react'
import { getToday, getDateFlags } from '../utils/dateUtils'
import { getBorderStyles } from '../utils/styleUtils'

const ActionButtons = ({ currentDate, onDateChange, onClearAll }) => {
  const today = getToday()
  const dateFlags = getDateFlags(currentDate)
  const borderStyles = getBorderStyles(dateFlags)

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
