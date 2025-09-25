/**
 * Style utility functions for the 333 Daily app
 */

import { DAY_STYLES } from '../constants/dayStyles.js';

/**
 * Get day-specific styles (unified function)
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @returns {object} Object with all day-specific style classes
 */
export const getDayStyles = dateFlags => {
    const { isToday, isYesterday, isTomorrow, isPast } = dateFlags;

    if (isToday) return DAY_STYLES.today;
    if (isYesterday) return DAY_STYLES.yesterday;
    if (isTomorrow) return DAY_STYLES.tomorrow;
    if (isPast) return DAY_STYLES.past;

    // isFuture
    return DAY_STYLES.future;
};
