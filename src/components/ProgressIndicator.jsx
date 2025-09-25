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
  
        <span className={`ml-auto text-sm font-medium ${dayStyles.text}`}> Progress: {completionPercentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${dayStyles.progressColor}`}
          style={{ 
            width: `${completionPercentage}%`
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressIndicator
