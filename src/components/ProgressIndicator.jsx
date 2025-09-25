import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags, getDayText, getDayEmoji } from '../utils/dateUtils'
import { getDayStyles } from '../utils/styleUtils'

const ProgressIndicator = ({ completionPercentage }) => {
  const { currentDate } = useDateContext()
  const dateFlags = getDateFlags(currentDate)
  const dayStyles = getDayStyles(dateFlags)

  return (
    <div className="card p-4">
      <div className="flex mb-2 flex-col md:flex-row justify-between">
        <div className={`text-md font-medium ${dayStyles.text}`}>{getDayText(dateFlags)}</div>
        
        <div className="ml text-sm font-medium">
          <span className={`text-gray-600 dark:text-gray-300`}>Progress: &nbsp;</span>
          <span className={`${dayStyles.text}`}>{completionPercentage}%</span>
        </div>
  
        
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
