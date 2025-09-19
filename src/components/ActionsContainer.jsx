import React from 'react'

const ActionsContainer = ({ currentDate, children }) => {
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  
  const isToday = currentDate === today
  const isYesterday = currentDate === yesterday
  const isTomorrow = currentDate === tomorrow
  const isPast = new Date(currentDate) < new Date(today)

  const getDayLabel = () => {
    if (isYesterday) return '⌛ Yesterday'
    if (isPast) return '📅 Past'
    
    if (isTomorrow) return ' 🚀 Tomorrow'
    if (isToday) return '🎯 Today'
    
    
    return '🔮 Future'
  }

  const getDayStyles = () => {
    if (isToday) {
      return {
        container: 'bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700',
        text: 'text-green-800 dark:text-green-200'
      }
    }
    if (isYesterday) {
      return {
        container: 'bg-orange-100 dark:bg-orange-900 border border-orange-200 dark:border-orange-700',
        text: 'text-orange-800 dark:text-orange-200'
      }
    }
    if (isTomorrow) {
      return {
        container: 'bg-blue-100 dark:bg-blue-900 border border-blue-200 dark:border-blue-700',
        text: 'text-blue-800 dark:text-blue-200'
      }
    }
    if (isPast) {
      return {
        container: 'bg-yellow-100 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700',
        text: 'text-yellow-800 dark:text-yellow-200'
      }
    }
    return {
      container: 'bg-purple-100 dark:bg-purple-900 border border-purple-200 dark:border-purple-700',
      text: 'text-purple-800 dark:text-purple-200'
    }
  }

  const styles = getDayStyles()

  return (
    <div className={`mb-6 py-4 px-6 rounded-lg space-y-2 ${styles.container}`}>
      <div className="text-center">
        <div className={`text-lg font-bold ${styles.text}`}>
          {getDayLabel()}
        </div>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}

export default ActionsContainer
