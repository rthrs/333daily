import React from 'react'
import { getDateFlags, getDayLabel } from '../utils/dateUtils'
import { getDayStyles } from '../utils/styleUtils'

const ActionsContainer = ({ currentDate, children }) => {
  const dateFlags = getDateFlags(currentDate)
  const styles = getDayStyles(dateFlags)

  return (
    <div className={`mb-6 py-4 px-6 rounded-lg space-y-2 ${styles.container}`}>
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
