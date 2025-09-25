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

      border: 'border-blue-300 dark:border-blue-600',
      background: 'bg-blue-100 dark:bg-blue-800',
      text: 'text-blue-600 dark:text-blue-400'
    }
  }
  if (isYesterday) {
    return {

      border: 'border-yellow-300 dark:border-yellow-600',
      background: 'bg-yellow-100 dark:bg-yellow-800',
      text: 'text-yellow-600 dark:text-yellow-400'
    }
  }
  if (isTomorrow) {
    return {

      border: 'border-indigo-300 dark:border-indigo-600',
      background: 'bg-indigo-100 dark:bg-indigo-800',
      text: 'text-indigo-600 dark:text-indigo-400'
    }
  }
  if (isPast) {
    return {

      border: 'border-gray-300 dark:border-gray-600',
      background: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-600 dark:text-gray-400'
    }
  }

  return {
    border: 'border-violet-300 dark:border-violet-600',
    background: 'bg-violet-100 dark:bg-violet-800',
    text: 'text-violet-600 dark:text-violet-400'
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
  if (isTomorrow) return 'border-indigo-300 dark:border-indigo-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400'
  if (isPast) return 'border-zinc-300 dark:border-zinc-600 focus:border-zinc-500 dark:focus:border-zinc-400 focus:ring-zinc-500 dark:focus:ring-zinc-400'
  
  return 'border-violet-300 dark:border-violet-600 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-violet-500 dark:focus:ring-violet-400'
}

/**
 * Get day-specific label color for progress indicator (legacy function for compatibility)
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Label color classes
 */
export const getLabelColor = (dateFlags) => {
  return getDayStyles(dateFlags).text
}
