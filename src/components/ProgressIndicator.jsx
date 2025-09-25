import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags, getDayText, getDayEmoji } from '../utils/dateUtils'
import { getDayStyles } from '../utils/styleUtils'
import ProgressBar from './ProgressBar'

const ProgressIndicator = ({ completionPercentage }) => {
  const { currentDate } = useDateContext()
  const dateFlags = getDateFlags(currentDate)
  const dayStyles = getDayStyles(dateFlags)

  return (
    <div className="card p-4">
      <div className="flex mb-2 flex-col md:flex-row justify-between">      
        <h3 className={`text-lg font-semibold ${dayStyles.text} mb-3 md:mb-0`}>{getDayText(dateFlags)}</h3>
  
        <div className="ml text-sm font-medium">
          <span className={`text-gray-600 font-light dark:text-gray-300`}>Progress: &nbsp;</span>
          <span className={`${dayStyles.text} font-bold`}>{completionPercentage}%</span>
        </div>
      </div>
      <ProgressBar 
        progress={completionPercentage} 
        progressColor={dayStyles.progressColor}
        height="h-2"
      />
    </div>
  )
}

export default ProgressIndicator
