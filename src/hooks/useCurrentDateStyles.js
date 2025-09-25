/**
 * Hook that provides memoized baseColor and styles for the current day
 * Automatically gets currentDateKind from useDateContext
 */

import { useMemo } from 'react';
import { useDateContext } from '../contexts/DateContext';
import { STYLES_CONFIG, DAY_TO_BASE_COLOR } from '../constants/styles.js';

/**
 * Get base color from day kind
 * @param {string} dayKind - Day kind ('today', 'yesterday', etc.)
 * @returns {string} Base color name (e.g., 'teal', 'orange')
 */
const getBaseColor = dayKind => {
    return DAY_TO_BASE_COLOR[dayKind];
};

/**
 * Get day-specific styles using base color
 * @param {string} baseColor - Base color name (e.g., 'teal', 'orange')
 * @returns {object} Object with all day-specific style classes
 */
const getDayStyles = baseColor => {
    return STYLES_CONFIG[baseColor];
};

/**
 * Hook that provides memoized baseColor and styles for the current day
 * Automatically gets currentDateKind from useDateContext
 * @returns {object} Object with memoized baseColor and styles
 */
export const useCurrentDateStyles = () => {
    const { currentDateKind } = useDateContext();
    const baseColor = useMemo(
        () => getBaseColor(currentDateKind),
        [currentDateKind]
    );
    const styles = useMemo(() => getDayStyles(baseColor), [baseColor]);

    return { baseColor, styles };
};
