import React from 'react'

const ProgressIndicator = ({ completionPercentage, currentDate }) => {
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  
  const isToday = currentDate === today
  const isYesterday = currentDate === yesterday
  const isTomorrow = currentDate === tomorrow
  const isPast = new Date(currentDate) < new Date(today)
  const isFuture = new Date(currentDate) > new Date(today)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getLabelColor = () => {
    if (isToday) return 'text-green-600 dark:text-green-400'
    if (isYesterday) return 'text-orange-600 dark:text-orange-400'
    if (isTomorrow) return 'text-blue-600 dark:text-blue-400'
    if (isPast) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-purple-600 dark:text-purple-400'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${getLabelColor()}`}>
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
