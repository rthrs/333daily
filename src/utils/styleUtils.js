/**
 * Style utility functions for the 333 Daily app
 */

/**
 * Get day-specific styles (unified function)
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {object} Object with all day-specific style classes
 */
export const getDayStyles = (dateFlags) => {
  const { isToday, isYesterday, isTomorrow, isPast } = dateFlags
  
  if (isToday) {
    return {
      container: 'bg-gray-100 dark:bg-gray-800 border border-blue-200 dark:border-blue-700',
      border: 'border-blue-300 dark:border-blue-600',
      background: 'bg-blue-100 dark:bg-blue-800',
      text: 'text-blue-600 dark:text-blue-400'
    }
  }
  if (isYesterday) {
    return {
      container: 'bg-gray-100 dark:bg-gray-800 border border-yellow-200 dark:border-yellow-700',
      border: 'border-yellow-300 dark:border-yellow-600',
      background: 'bg-yellow-100 dark:bg-yellow-800',
      text: 'text-yellow-600 dark:text-yellow-400'
    }
  }
  if (isTomorrow) {
    return {
      container: 'bg-gray-100 dark:bg-gray-800 border border-purple-200 dark:border-purple-700',
      border: 'border-purple-300 dark:border-purple-600',
      background: 'bg-purple-100 dark:bg-purple-800',
      text: 'text-purple-600 dark:text-purple-400'
    }
  }
  if (isPast) {
    return {
      container: 'bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
      border: 'border-gray-300 dark:border-gray-600',
      background: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-600 dark:text-gray-400'
    }
  }

  return {
    container: 'bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    border: 'border-gray-300 dark:border-gray-600',
    background: 'bg-gray-100 dark:bg-gray-800',
    text: 'text-gray-600 dark:text-gray-400'
  }
}

/**
 * Get day-specific border styles for buttons and inputs (legacy function for compatibility)
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Border style classes
 */
export const getBorderStyles = (dateFlags) => {
  return getDayStyles(dateFlags).border
}

/**
 * Get day-specific input focus styles
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Input focus style classes
 */
export const getInputStyles = (dateFlags) => {
  const { isToday, isYesterday, isTomorrow, isPast } = dateFlags
  
  if (isToday) return 'border-blue-300 dark:border-blue-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400'
  if (isYesterday) return 'border-yellow-300 dark:border-yellow-600 focus:border-yellow-500 dark:focus:border-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-400'
  if (isTomorrow) return 'border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400'
  if (isPast) return 'border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 focus:ring-gray-500 dark:focus:ring-gray-400'
  
  return 'border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 focus:ring-gray-500 dark:focus:ring-gray-400'
}

/**
 * Get day-specific label color for progress indicator (legacy function for compatibility)
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Label color classes
 */
export const getLabelColor = (dateFlags) => {
  return getDayStyles(dateFlags).text
}
