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
  const canClear = isToday || isFuture;

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">333 Daily</h1>
      <p className="text-gray-600 mb-4">
        Oliver Burkeman's 333 method: 3 hours to your most important project, 3 urgent tasks, 3 maintenance activities.
      </p>
      
      {/* Date indicator with context - always present to prevent layout shift */}
      <div className="mb-4 h-6 flex items-center justify-center space-x-4">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          isToday 
            ? 'bg-green-100 text-green-800'
            : isYesterday
              ? 'bg-orange-100 text-orange-800'
            : isTomorrow
              ? 'bg-blue-100 text-blue-800'
            : isPast 
              ? 'bg-yellow-100 text-yellow-800' 
              : 'bg-purple-100 text-purple-800'
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
      <div className="flex items-center justify-center space-x-4 mb-6">
        <label htmlFor="date" className="text-sm font-medium text-gray-700">Date:</label>
        
        {/* Previous day button */}
        <button
          onClick={() => {
            const prevDate = new Date(currentDate)
            prevDate.setDate(prevDate.getDate() - 1)
            onDateChange(prevDate.toISOString().split('T')[0])
          }}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
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
          className="input-field w-auto"
        />

        {/* Next day button */}
        <button
          onClick={() => {
            const nextDate = new Date(currentDate)
            nextDate.setDate(nextDate.getDate() + 1)
            onDateChange(nextDate.toISOString().split('T')[0])
          }}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          title="Next day"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Today button - always present to prevent layout shift */}
        <div className="w-16 h-8 flex items-center justify-center">
            <button
              onClick={() => onDateChange(today)}
              className="px-3 py-2 text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200"
              title="Go to today"
            >
              Today
            </button>
        </div>

      </div>


      {/* Progress indicator */}
      <ProgressIndicator completionPercentage={completionPercentage} />

      {/* Clear button - always present to prevent layout shift */}
      <div className="h-8 flex items-center justify-center">
        {canClear && (
          <button
            onClick={onClearAll}
            className="btn-secondary text-sm"
          >
            Clear All Tasks
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
