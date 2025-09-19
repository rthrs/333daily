/**
 * Style utility functions for the 333 Daily app
 */

/**
 * Get day-specific container styles
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {object} Object with container and text style classes
 */
export const getDayStyles = (dateFlags) => {
  const { isToday, isYesterday, isTomorrow, isPast } = dateFlags
  
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

/**
 * Get day-specific border styles for buttons and inputs
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Border style classes
 */
export const getBorderStyles = (dateFlags) => {
  const { isToday, isYesterday, isTomorrow, isPast } = dateFlags
  
  if (isToday) return 'border-green-300 dark:border-green-600'
  if (isYesterday) return 'border-orange-300 dark:border-orange-600'
  if (isTomorrow) return 'border-blue-300 dark:border-blue-600'
  if (isPast) return 'border-yellow-300 dark:border-yellow-600'
  return 'border-purple-300 dark:border-purple-600'
}

/**
 * Get day-specific input focus styles
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Input focus style classes
 */
export const getInputStyles = (dateFlags) => {
  const { isToday, isYesterday, isTomorrow, isPast } = dateFlags
  
  if (isToday) return 'border-green-300 dark:border-green-600 focus:border-green-500 dark:focus:border-green-400 focus:ring-green-500 dark:focus:ring-green-400'
  if (isYesterday) return 'border-orange-300 dark:border-orange-600 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500 dark:focus:ring-orange-400'
  if (isTomorrow) return 'border-blue-300 dark:border-blue-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400'
  if (isPast) return 'border-yellow-300 dark:border-yellow-600 focus:border-yellow-500 dark:focus:border-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-400'
  
  return 'border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400'
}

/**
 * Get day-specific label color for progress indicator
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Label color classes
 */
export const getLabelColor = (dateFlags) => {
  const { isToday, isYesterday, isTomorrow, isPast } = dateFlags
  
  if (isToday) return 'text-green-600 dark:text-green-400'
  if (isYesterday) return 'text-orange-600 dark:text-orange-400'
  if (isTomorrow) return 'text-blue-600 dark:text-blue-400'
  if (isPast) return 'text-yellow-600 dark:text-yellow-400'
  
  return 'text-purple-600 dark:text-purple-400'
}
