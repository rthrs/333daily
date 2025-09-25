import React, { useState, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useDateContext } from '../contexts/DateContext'
import { getDateFlags, formatDateShort, getDayName, getDayEmoji, getDayText } from '../utils/dateUtils'
import { getDayStyles } from '../utils/styleUtils'

const DateNavigation = ({ onDateChange, onClearAll }) => {
  const { isDark } = useTheme()
  const { currentDate, goToPreviousDay, goToNextDay, goToToday, handleDateChange } = useDateContext()
  const [showDatePicker, setShowDatePicker] = useState(false)
  const dateInputRef = useRef(null)
  
  const dateFlags = getDateFlags(currentDate)
  const dayStyles = getDayStyles(dateFlags)

  const handleDateInputChange = (newDate) => {
    handleDateChange(newDate)
    onDateChange && onDateChange(newDate)
    setShowDatePicker(false)
  }

  const handleCalendarClick = () => {
    setShowDatePicker(true)
    // Focus the date input after a brief delay to ensure it's rendered
    setTimeout(() => {
      if (dateInputRef.current) {
        dateInputRef.current.showPicker()
      }
    }, 100)
  }

  const handleTodayClick = () => {
    goToToday()
    onDateChange && onDateChange(currentDate)
  }

  // Reusable button component
  const NavigationButton = ({ onClick, title, children, className = "" }) => (
    <button
      onClick={onClick}
      className={`btn-icon ${className}`}
      title={title}
    >
      {children}
    </button>
  )

  return (
    <div className={`card ${dayStyles.background} relative`}>
      {/* Day text in bottom right corner of outer box */}
      <div className="absolute bottom-0 right-0 pr-6">
      

        <span className={`text-xs uppercase font-bold ${dayStyles.text}`}>
        { getDayText(dateFlags)}
        </span>
      </div>
      
      <div className={`card space-y-4 px-4`}>
          <div className="text-center">
            <h2 className={`text-3xl font-bold ${dayStyles.text} hover:opacity-80 transition-opacity cursor-pointer`} onClick={handleCalendarClick}>
              {formatDateShort(currentDate)}
            </h2>
            <p className={`text-lg font-light mt-1`}>
              {getDayName(currentDate)}
            </p>
            
            {/* Hidden date input positioned under date */}
            {showDatePicker && (
              <input
                ref={dateInputRef}
                type="date"
                name="date"
                value={currentDate}
                onValueChange={(e) => handleDateInputChange(e.target.value)}
                className="sr-only"
                style={{
                  colorScheme: isDark ? 'dark' : 'light'
                }}
                required
              />
            )}
          </div>
        
        {/* Button row below */}
        <div className="flex items-center justify-center space-x-2">          
          <NavigationButton
            onClick={() => {
              const newDate = goToPreviousDay()
              onDateChange && onDateChange(newDate)
            }}
            title="Previous day"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </NavigationButton>

          <NavigationButton
            onClick={() => {
              const newDate = goToNextDay()
              onDateChange && onDateChange(newDate)
            }}
            title="Next day"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NavigationButton>

          <NavigationButton
            onClick={handleTodayClick}
            title="Go to today"
          >
             <span className="text-sm">Today</span>
          </NavigationButton>

          <NavigationButton
            onClick={onClearAll}
            title="Clear all data"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </NavigationButton>
        </div>
      </div>
    </div>
  )
}

export default DateNavigation
