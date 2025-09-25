import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags, getDayLabel } from '../utils/dateUtils'
import { getDayStyles } from '../utils/styleUtils'

const ActionsContainer = ({ children }) => {
  const { currentDate } = useDateContext()
  const dateFlags = getDateFlags(currentDate)
  const styles = getDayStyles(dateFlags)

  return (
    <div className="mb-6 py-4 px-6 rounded-lg space-y-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <div className={`text-lg font-bold ${styles.text}`}>
          {getDayLabel(dateFlags)}
        </div>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}

export default ActionsContainer
