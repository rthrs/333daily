export const CATEGORIES = {
  PROJECT: 'project',
  URGENT: 'urgent',
  MAINTENANCE: 'maintenance'
}

export const CATEGORY_COLORS = {
  [CATEGORIES.PROJECT]: {
    text: 'text-blue-600 dark:text-blue-400',
    background: 'bg-blue-100 dark:bg-blue-950 hover:bg-blue-200 dark:hover:bg-blue-900/40'
  },
  [CATEGORIES.URGENT]: {
    text: 'text-red-600 dark:text-red-400',
    background: 'bg-red-100 dark:bg-red-950 hover:bg-red-200 dark:hover:bg-red-900/40'
  },
  [CATEGORIES.MAINTENANCE]: {
    text: 'text-green-600 dark:text-green-400',
    background: 'bg-green-100 dark:bg-green-950 hover:bg-green-200 dark:hover:bg-green-900/40'
  }
}

export const getCategoryColor = (category) => {
  return CATEGORY_COLORS[category]?.text || 'text-gray-600 dark:text-gray-200'
}

export const getCategoryBackground = (category) => {
  return CATEGORY_COLORS[category]?.background || 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
}
