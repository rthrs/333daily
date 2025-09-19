import React from 'react'
import ProgressIndicator from './ProgressIndicator'
import ThemeSwitcher from './ThemeSwitcher'
import { useTheme } from '../contexts/ThemeContext'

const Header = ({ 
  currentDate, 
  onDateChange, 
  completionPercentage, 
  onClearAll
}) => {
  const { isDark } = useTheme()
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  
  const isToday = currentDate === today
  const isYesterday = currentDate === yesterday
  const isTomorrow = currentDate === tomorrow
  const isPast = new Date(currentDate) < new Date(today)
  const isFuture = new Date(currentDate) > new Date(today)

  return (
    <div className="text-center mb-8">
      <div className="flex mb-4 flex-col">
        <div className="flex justify-between items-start">
          <div className="flex-1"></div>
            <h1 className="flex-1 text-center text-4xl font-bold text-gray-900 dark:text-white mb-2">333 Daily</h1>  
          <div className="flex-1 flex justify-end">
            <ThemeSwitcher />
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 m-4">
            Oliver Burkeman's 333 method: 3 hours to your most important project, 3 urgent tasks, 3 maintenance activities.
          </p>
      </div>
      
      {/* Date indicator with context - always present to prevent layout shift */}
      <div className={`mb-6 py-4 px-6 rounded-lg ${
        isToday 
          ? 'bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700'
          : isYesterday
            ? 'bg-orange-100 dark:bg-orange-900 border border-orange-200 dark:border-orange-700'
          : isTomorrow
            ? 'bg-blue-100 dark:bg-blue-900 border border-blue-200 dark:border-blue-700'
          : isPast 
            ? 'bg-yellow-100 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700' 
            : 'bg-purple-100 dark:bg-purple-900 border border-purple-200 dark:border-purple-700'
      }`}>
        {/* Day label and date */}
        <div className="text-center mb-4">
          <div className={`text-lg font-bold ${
            isToday 
              ? 'text-green-800 dark:text-green-200'
              : isYesterday
                ? 'text-orange-800 dark:text-orange-200'
              : isTomorrow
                ? 'text-blue-800 dark:text-blue-200'
              : isPast 
                ? 'text-yellow-800 dark:text-yellow-200' 
                : 'text-purple-800 dark:text-purple-200'
          }`}>
            {isToday 
              ? '✨ Today' 
              : isYesterday
                ? '📅 Yesterday'
              : isTomorrow
                ? '🔮 Tomorrow'
              : isPast 
                ? '📅 Past' 
                : '🔮 Future'
            }
          </div>
        </div>

        {/* Date selector with navigation */}
        <div className="flex items-center justify-center space-x-4">
          
          {/* Previous day button */}
          <button
            onClick={() => {
              const prevDate = new Date(currentDate)
              prevDate.setDate(prevDate.getDate() - 1)
              onDateChange(prevDate.toISOString().split('T')[0])
            }}
            className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border ${
              isToday 
                ? 'border-green-300 dark:border-green-600'
                : isYesterday
                  ? 'border-orange-300 dark:border-orange-600'
                : isTomorrow
                  ? 'border-blue-300 dark:border-blue-600'
                : isPast 
                  ? 'border-yellow-300 dark:border-yellow-600' 
                  : 'border-purple-300 dark:border-purple-600'
            }`}
            title="Previous day"
          >
            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <input
            type="date"
            id="date"
            value={currentDate}
            onChange={(e) => onDateChange(e.target.value)}
            className={`input-field w-auto dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 cursor-pointer ${
              isToday 
                ? 'border-green-300 dark:border-green-600 focus:border-green-500 dark:focus:border-green-400 focus:ring-green-500 dark:focus:ring-green-400'
                : isYesterday
                  ? 'border-orange-300 dark:border-orange-600 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500 dark:focus:ring-orange-400'
                : isTomorrow
                  ? 'border-blue-300 dark:border-blue-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400'
                : isPast 
                  ? 'border-yellow-300 dark:border-yellow-600 focus:border-yellow-500 dark:focus:border-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-400' 
                  : 'border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400'
            }`}
            style={{
              colorScheme: isDark ? 'dark' : 'light'
            }}
          />

          {/* Next day button */}
          <button
            onClick={() => {
              const nextDate = new Date(currentDate)
              nextDate.setDate(nextDate.getDate() + 1)
              onDateChange(nextDate.toISOString().split('T')[0])
            }}
            className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border ${
              isToday 
                ? 'border-green-300 dark:border-green-600'
                : isYesterday
                  ? 'border-orange-300 dark:border-orange-600'
                : isTomorrow
                  ? 'border-blue-300 dark:border-blue-600'
                : isPast 
                  ? 'border-yellow-300 dark:border-yellow-600' 
                  : 'border-purple-300 dark:border-purple-600'
            }`}
            title="Next day"
          >
            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Today button - always present to prevent layout shift */}
          <div className="h-8 flex items-center justify-center">
              <button
                onClick={() => onDateChange(today)}
                className={`px-3 py-2 text-sm font-medium bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 border ${
                  isToday 
                    ? 'border-green-300 dark:border-green-600'
                    : isYesterday
                      ? 'border-orange-300 dark:border-orange-600'
                    : isTomorrow
                      ? 'border-blue-300 dark:border-blue-600'
                    : isPast 
                      ? 'border-yellow-300 dark:border-yellow-600' 
                      : 'border-purple-300 dark:border-purple-600'
                }`}
                title="Go to today"
              >
                ✨ Go to today
              </button>
          </div>
        </div>
      </div>


      {/* Progress indicator */}
      <ProgressIndicator completionPercentage={completionPercentage} />

      {/* Clear button - always present to prevent layout shift */}
      <div className="h-8 flex items-center justify-center">
          <button
            onClick={onClearAll}
            className="btn-secondary text-sm"
          >
            Clear All Tasks
          </button>
      </div>
    </div>
  )
}

export default Header
