import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags } from '../utils/dateUtils'
import { getBorderStyles } from '../utils/styleUtils'

const ActionButtons = ({ onClearAll }) => {
  const { goToToday, currentDate } = useDateContext()
  const dateFlags = getDateFlags(currentDate)
  const borderStyles = getBorderStyles(dateFlags)

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={goToToday}
        className={`btn-ghost text-sm ${borderStyles}`}
        title="Go to today"
      >
        ✨ Go To Today
      </button>

      <button
        onClick={onClearAll}
        className={`btn-ghost text-sm ${borderStyles}`}
      >
        🗑️ Clear All Tasks
      </button>
    </div>
  )
}

export default ActionButtons
