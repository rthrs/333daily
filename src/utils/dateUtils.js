/**
 * Date utility functions for the 333 Daily app
 */

/**
 * Get today's date in YYYY-MM-DD format
 */
export const getToday = () => {
    return new Date().toISOString().split('T')[0];
};

/**
 * Get date comparison flags for a given date
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {object} Object with isToday, isYesterday, isTomorrow, isPast, isFuture flags
 */
export const getDateFlags = dateString => {
    const today = getToday();
    const daysDelta = getDaysDifference(today, dateString);

    return {
        isToday: daysDelta === 0,
        isYesterday: daysDelta === -1,
        isTomorrow: daysDelta === 1,
        isPast: daysDelta < 0,
        isFuture: daysDelta > 0,
    };
};

/**
 * Format date in "day month year" format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string in "Day Month Year" format
 */
export const formatDateShort = dateString => {
    const date = new Date(dateString);

    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
};

/**
 * Get day name only
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Day name only
 */
export const getDayName = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
};

/**
 * Calculate the number of days between two dates
 * @param {string} date1 - First date in YYYY-MM-DD format
 * @param {string} date2 - Second date in YYYY-MM-DD format
 * @returns {number} Number of days difference (positive if date2 is after date1)
 */
export const getDaysDifference = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = d2.getTime() - d1.getTime();

    return Math.round(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Get day text using Intl.RelativeTimeFormat with natural language
 * @param {object} dateFlags - Date flags object from getDateFlags
 * @param {string} dateString - Current date in YYYY-MM-DD format
 * @returns {string} Day text with natural language formatting
 */
export const getDayText = dateString => {
    const today = getToday();
    const daysDelta = getDaysDifference(today, dateString);

    // Use Intl.RelativeTimeFormat with formatToParts for natural language
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    return rtf.format(daysDelta, 'day');
};
