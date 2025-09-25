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
      border: 'border-teal-300 dark:border-teal-700',
      background: 'bg-teal-100 dark:bg-teal-950',
      text: 'text-teal-600 dark:text-teal-400',
      progressColor: 'bg-teal-500 dark:bg-teal-700'
    }
  }
  if (isYesterday) {
    return {
      border: 'border-orange-300 dark:border-orange-700',
      background: 'bg-orange-100 dark:bg-orange-950',
      text: 'text-orange-600 dark:text-orange-400',
      progressColor: 'bg-orange-500 dark:bg-orange-600'
    }
  }
  if (isTomorrow) {
    return {
      border: 'border-sky-300 dark:border-sky-700',
      background: 'bg-sky-100 dark:bg-sky-950',
      text: 'text-sky-600 dark:text-sky-400',
      progressColor: 'bg-sky-500 dark:bg-sky-600'
    }
  }
  if (isPast) {
    return {
      border: 'border-red-300 dark:border-red-700',
      background: 'bg-red-100 dark:bg-red-950',
      text: 'text-red-600 dark:text-red-400',
      progressColor: 'bg-red-500 dark:bg-red-600'
    }
  }

  // isFuture
  return {
    border: 'border-purple-300 dark:border-purple-700',
    background: 'bg-purple-100 dark:bg-purple-950',
    text: 'text-purple-600 dark:text-purple-400',
    progressColor: 'bg-purple-500 dark:bg-purple-600'
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
  
  if (isToday) return 'border-teal-300 dark:border-teal-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-teal-500 dark:focus:ring-teal-400'
  if (isYesterday) return 'border-orange-300 dark:border-orange-700 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500 dark:focus:ring-orange-400'
  if (isTomorrow) return 'border-sky-300 dark:border-sky-700 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-sky-500 dark:focus:ring-sky-400'
  if (isPast) return 'border-red-300 dark:border-red-700 focus:border-red-500 dark:focus:border-red-400 focus:ring-red-500 dark:focus:ring-red-400'
  
  return 'border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400'
}

/**
 * Get day-specific label color for progress indicator (legacy function for compatibility)
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {string} Label color classes
 */
export const getLabelColor = (dateFlags) => {
  return getDayStyles(dateFlags).text
}
