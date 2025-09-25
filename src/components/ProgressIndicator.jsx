import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags, formatDate } from '../utils/dateUtils'
import { getLabelColor } from '../utils/styleUtils'

const ProgressIndicator = ({ completionPercentage }) => {
  const { currentDate } = useDateContext()
  const dateFlags = getDateFlags(currentDate)

  return (
    <div className="card card-dark p-4 mb-6">
      <div className="flex justify-between mb-2  flex-col md:flex-row">
        <span className={`text-sm font-medium ${getLabelColor(dateFlags)}`}>
          {formatDate(currentDate)}
        </span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400"> Progress: {completionPercentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressIndicator
