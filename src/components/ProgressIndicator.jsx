import React from 'react'

const ProgressIndicator = ({ completionPercentage }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Today's Progress</span>
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
