import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags, formatDate } from '../utils/dateUtils'
import { getDayStyles } from '../utils/styleUtils'

const ProgressIndicator = ({ completionPercentage }) => {
  const { currentDate } = useDateContext()
  const dateFlags = getDateFlags(currentDate)
  const dayStyles = getDayStyles(dateFlags)

  return (
    <div className="card p-4">
      <div className="flex justify-between mb-2  flex-col md:flex-row">
        <span className={`text-sm font-medium ${dayStyles.text}`}>
          {formatDate(currentDate)}
        </span>
        <span className={`text-sm font-medium ${dayStyles.text}`}> Progress: {completionPercentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="h-2 rounded-full transition-all duration-300"
          style={{ 
            width: `${completionPercentage}%`,
            backgroundColor: dateFlags.isToday ? '#3b82f6' : 
                           dateFlags.isYesterday ? '#eab308' : 
                           dateFlags.isTomorrow ? '#6366f1' : 
                           dateFlags.isPast ? '#71717a' : '#8b5cf6'
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressIndicator
