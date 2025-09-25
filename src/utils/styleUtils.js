/**
 * Style utility functions for the 333 Daily app
 */

import { STYLES_CONFIG, DAY_TO_BASE_COLOR } from '../constants/styles.js';

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
    return STYLES_CONFIG[baseColor];
};

/**
 * Get navigation text color from base color
 * @param {string} baseColor - Base color name
 * @returns {string} Tailwind CSS text color classes
 */
export const getNavigationTextColor = baseColor => {
    return STYLES_CONFIG[baseColor].navigation.text;
};

/**
 * Get task background classes from base color
 * @param {string} baseColor - Base color name
 * @returns {string} Tailwind CSS background classes
 */
export const getTaskBackground = baseColor => {
    return STYLES_CONFIG[baseColor].task.background;
};

/**
 * Get task border classes from base color
 * @param {string} baseColor - Base color name
 * @returns {string} Tailwind CSS border classes
 */
export const getTaskBorder = baseColor => {
    return STYLES_CONFIG[baseColor].task.border;
};
