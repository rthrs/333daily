/**
 * Date utility functions for the 333 Daily app
 */

/**
 * Get today's date in YYYY-MM-DD format
 */
export const getToday = () => {
  return new Date().toISOString().split('T')[0]
}

/**
 * Get yesterday's date in YYYY-MM-DD format
 */
export const getYesterday = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  
  return yesterday.toISOString().split('T')[0]
}

/**
 * Get tomorrow's date in YYYY-MM-DD format
 */
export const getTomorrow = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  return tomorrow.toISOString().split('T')[0]
}

/**
 * Get date comparison flags for a given date
 * @param {string} currentDate - Date in YYYY-MM-DD format
 * @returns {object} Object with isToday, isYesterday, isTomorrow, isPast, isFuture flags
 */
export const getDateFlags = (currentDate) => {
  const today = getToday()
  const yesterday = getYesterday()
  const tomorrow = getTomorrow()
  
  return {
    isToday: currentDate === today,
    isYesterday: currentDate === yesterday,
    isTomorrow: currentDate === tomorrow,
    isPast: new Date(currentDate) < new Date(today),
    isFuture: new Date(currentDate) > new Date(today)
  }
}

/**
 * Format date for display
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string in "Day Name - Month Day Year" format
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()
  
  return `${weekday} - ${month} ${day} ${year}`
}

/**
 * Format date in "day month year" format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string in "Day Month Year" format
 */
export const formatDateShort = (dateString) => {
  const date = new Date(dateString)
  
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()
  
  return `${day} ${month} ${year}`
}

/**
 * Get day name only
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Day name only
 */
export const getDayName = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}


/**
 * Get day text without emoji based on date flags
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Day text without emoji
 */
export const getDayText = (dateFlags) => {
  const { isToday, isYesterday, isTomorrow, isPast } = dateFlags
  
  if (isYesterday) return 'Yesterday'
  if (isPast) return 'Past'
  if (isTomorrow) return 'Tomorrow'
  if (isToday) return 'Today'
  
  return 'Future'
}
