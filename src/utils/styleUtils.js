/**
 * Style utility functions for the 333 Daily app
 */

/**
 * Get day-specific styles (unified function)
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {object} Object with all day-specific style classes
 */
export const getDayStyles = dateFlags => {
    const { isToday, isYesterday, isTomorrow, isPast } = dateFlags;

    if (isToday) {
        return {
            border: 'border-teal-300 dark:border-teal-700',
            background: 'bg-teal-100 dark:bg-teal-950',
            text: 'text-teal-600 dark:text-teal-400',
            progressColor: 'bg-teal-500 dark:bg-teal-700',
        };
    }
    if (isYesterday) {
        return {
            border: 'border-orange-300 dark:border-orange-700',
            background: 'bg-orange-100 dark:bg-orange-950',
            text: 'text-orange-600 dark:text-orange-400',
            progressColor: 'bg-orange-500 dark:bg-orange-600',
        };
    }
    if (isTomorrow) {
        return {
            border: 'border-sky-300 dark:border-sky-700',
            background: 'bg-sky-100 dark:bg-sky-950',
            text: 'text-sky-600 dark:text-sky-400',
            progressColor: 'bg-sky-500 dark:bg-sky-600',
        };
    }
    if (isPast) {
        return {
            border: 'border-red-300 dark:border-red-700',
            background: 'bg-red-100 dark:bg-red-950',
            text: 'text-red-600 dark:text-red-400',
            progressColor: 'bg-red-500 dark:bg-red-600',
        };
    }

    // isFuture
    return {
        border: 'border-purple-300 dark:border-purple-700',
        background: 'bg-purple-100 dark:bg-purple-950',
        text: 'text-purple-600 dark:text-purple-400',
        progressColor: 'bg-purple-500 dark:bg-purple-600',
    };
};
