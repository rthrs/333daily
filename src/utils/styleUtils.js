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
      background: 'teal-100 dark:bg-teal-950 dark:border-teal-700',
      text: 'text-teal-600 dark:text-teal-400',
      progressColor: 'bg-teal-500 dark:bg-teal-700'
    }
  }
  if (isYesterday) {
    return {
      background: 'bg-orange-100 dark:bg-orange-950 dark:border-orange-700',
      text: 'text-orange-600 dark:text-orange-400',
      progressColor: 'bg-orange-500 dark:bg-orange-600'
    }
  }
  if (isTomorrow) {
    return {
      background: 'bg-blue-100 dark:bg-blue-950 dark:border-blue-700',
      text: 'text-blue-600 dark:text-blue-400',
      progressColor: 'bg-blue-500 dark:bg-blue-600'
    }
  }
  if (isPast) {
    return {
      background: 'bg-red-100 dark:bg-red-950 dark:border-red-700',
      text: 'text-red-600 dark:text-red-400',
      progressColor: 'bg-red-500 dark:bg-red-600'
    }
  }

  // isFuture
  return {
    background: 'bg-purple-100 dark:bg-purple-950 dark:border-purple-700',
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
