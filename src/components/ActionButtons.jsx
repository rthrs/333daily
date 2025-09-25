import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags } from '../utils/dateUtils'
import { getDayStyles } from '../utils/styleUtils'

const ActionButtons = ({ onClearAll }) => {
  const { goToToday, currentDate } = useDateContext()
  const dateFlags = getDateFlags(currentDate)
  const dayStyles = getDayStyles(dateFlags)

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={goToToday}
        className={`${dayStyles.background} ${dayStyles.border} hover:opacity-80 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer border`}
        title="Go to today"
      >
        ✨ Go To Today
      </button>

      <button
        onClick={onClearAll}
        className={`${dayStyles.background} ${dayStyles.border} hover:opacity-80 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer border`}
      >
        🗑️ Clear All Tasks
      </button>
    </div>
  )
}

export default ActionButtons
