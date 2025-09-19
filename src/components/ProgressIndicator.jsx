import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags, formatDate } from '../utils/dateUtils'
import { getLabelColor } from '../utils/styleUtils'

const ProgressIndicator = ({ completionPercentage }) => {
  const { currentDate } = useDateContext()
  const dateFlags = getDateFlags(currentDate)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${getLabelColor(dateFlags)}`}>
          {formatDate(currentDate)} Progress
        </span>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{completionPercentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressIndicator
