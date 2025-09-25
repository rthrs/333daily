/**
 * Style utility functions for the 333 Daily app
 */

import {
    DAY_STYLES,
    DAY_TO_BASE_COLOR,
    CATEGORY_BACKGROUND_CLASSES,
    CATEGORY_BORDER_CLASSES,
} from '../constants/styles.js';

/**
 * Get base color from day kind
 * @param {string} dayKind - Day kind ('today', 'yesterday', etc.)
 * @returns {string} Base color name (e.g., 'teal', 'orange')
 */
export const getBaseColor = dayKind => {
    return DAY_TO_BASE_COLOR[dayKind];
};

/**
 * Get day-specific styles using base color
 * @param {string} baseColor - Base color name (e.g., 'teal', 'orange')
 * @returns {object} Object with all day-specific style classes
 */
export const getDayStyles = baseColor => {
    return DAY_STYLES[baseColor];
};

/**
 * Get day category color from base color
 * @param {string} baseColor - Base color name
 * @returns {string} Tailwind CSS text color classes
 */
export const getDayCategoryColor = baseColor => {
    return DAY_STYLES[baseColor].text;
};

/**
 * Get day category background classes from base color
 * @param {string} baseColor - Base color name
 * @returns {string} Tailwind CSS background classes
 */
export const getDayCategoryBackground = baseColor => {
    return CATEGORY_BACKGROUND_CLASSES[baseColor];
};

/**
 * Get day category border classes from base color
 * @param {string} baseColor - Base color name
 * @returns {string} Tailwind CSS border classes
 */
export const getDayCategoryBorder = baseColor => {
    return CATEGORY_BORDER_CLASSES[baseColor];
};
