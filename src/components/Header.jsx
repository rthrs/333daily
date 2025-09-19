import React from 'react'
import ProgressIndicator from './ProgressIndicator'

const Header = ({ 
  currentDate, 
  onDateChange, 
  completionPercentage, 
  onClearAll
}) => {
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
      <h1 className="text-4xl font-bold text-gray-900 mb-2">333 Daily</h1>
      <p className="text-gray-600 mb-4">
        Oliver Burkeman's 333 method: 3 hours to your most important project, 3 urgent tasks, 3 maintenance activities.
      </p>
      
      {/* Date indicator with context - always present to prevent layout shift */}
      <div className={`mb-6 py-4 px-6 rounded-lg ${
        isToday 
          ? 'bg-green-100 border border-green-200'
          : isYesterday
            ? 'bg-orange-100 border border-orange-200'
          : isTomorrow
            ? 'bg-blue-100 border border-blue-200'
          : isPast 
            ? 'bg-yellow-100 border border-yellow-200' 
            : 'bg-purple-100 border border-purple-200'
      }`}>
        {/* Day label and date */}
        <div className="text-center mb-4">
          <div className={`text-lg font-bold ${
            isToday 
              ? 'text-green-800'
              : isYesterday
                ? 'text-orange-800'
              : isTomorrow
                ? 'text-blue-800'
              : isPast 
                ? 'text-yellow-800' 
                : 'text-purple-800'
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
            className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 border ${
              isToday 
                ? 'border-green-300'
                : isYesterday
                  ? 'border-orange-300'
                : isTomorrow
                  ? 'border-blue-300'
                : isPast 
                  ? 'border-yellow-300' 
                  : 'border-purple-300'
            }`}
            title="Previous day"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <input
            type="date"
            id="date"
            value={currentDate}
            onChange={(e) => onDateChange(e.target.value)}
            className={`input-field w-auto ${
              isToday 
                ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                : isYesterday
                  ? 'border-orange-300 focus:border-orange-500 focus:ring-orange-500'
                : isTomorrow
                  ? 'border-blue-300 focus:border-blue-500 focus:ring-blue-500'
                : isPast 
                  ? 'border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500' 
                  : 'border-purple-300 focus:border-purple-500 focus:ring-purple-500'
            }`}
          />

          {/* Next day button */}
          <button
            onClick={() => {
              const nextDate = new Date(currentDate)
              nextDate.setDate(nextDate.getDate() + 1)
              onDateChange(nextDate.toISOString().split('T')[0])
            }}
            className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 border ${
              isToday 
                ? 'border-green-300'
                : isYesterday
                  ? 'border-orange-300'
                : isTomorrow
                  ? 'border-blue-300'
                : isPast 
                  ? 'border-yellow-300' 
                  : 'border-purple-300'
            }`}
            title="Next day"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Today button - always present to prevent layout shift */}
          <div className="h-8 flex items-center justify-center">
              <button
                onClick={() => onDateChange(today)}
                className={`px-3 py-2 text-sm font-medium bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 border ${
                  isToday 
                    ? 'border-green-300'
                    : isYesterday
                      ? 'border-orange-300'
                    : isTomorrow
                      ? 'border-blue-300'
                    : isPast 
                      ? 'border-yellow-300' 
                      : 'border-purple-300'
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
