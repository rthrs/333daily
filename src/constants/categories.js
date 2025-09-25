export const CATEGORIES = {
  PROJECT: 'project',
  URGENT: 'urgent',
  MAINTENANCE: 'maintenance'
}

export const CATEGORY_COLORS = {
  [CATEGORIES.PROJECT]: {
    text: 'text-blue-600 dark:text-blue-400',
    background: 'bg-blue-100 dark:bg-blue-900/90 hover:bg-blue-200 dark:hover:bg-blue-900/60',
    border: 'border-blue-200 dark:border-blue-800/90 hover:border-blue-300 dark:hover:border-blue-700/60'
  },
  [CATEGORIES.URGENT]: {
    text: 'text-red-600 dark:text-red-400',
    background: 'bg-red-100 dark:bg-red-900/90 hover:bg-red-200 dark:hover:bg-red-900/60',
    border: 'border-red-200 dark:border-red-800/90 hover:border-red-300 dark:hover:border-red-700/60'
  },
  [CATEGORIES.MAINTENANCE]: {
    text: 'text-green-600 dark:text-green-400',
    background: 'bg-green-100 dark:bg-green-900/90 hover:bg-green-200 dark:hover:bg-green-900/60',
    border: 'border-green-200 dark:border-green-800/90 hover:border-green-300 dark:hover:border-green-700/60'
  }
}

export const getCategoryColor = (category) => {
  return CATEGORY_COLORS[category]?.text || 'text-gray-600 dark:text-gray-200'
}

export const getCategoryBackground = (category) => {
  return CATEGORY_COLORS[category]?.background || 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
}

export const getCategoryBorder = (category) => {
  return CATEGORY_COLORS[category]?.border || 'border-gray-200 dark:border-gray-700'
}
