/**
 * Day-specific style constants for the 333 Daily app
 */

/**
 * Base color definitions for each day type
 */
const DAY_BASE_COLORS = {
    today: 'teal',
    yesterday: 'orange',
    tomorrow: 'sky',
    past: 'red',
    future: 'purple',
};

/**
 * Generate border styles for a given base color
 * @param {string} baseColor - The base color name (e.g., 'teal', 'orange')
 * @returns {string} Tailwind CSS border classes
 */
const generateBorderStyles = baseColor => {
    return `border-${baseColor}-300 dark:border-${baseColor}-700`;
};

/**
 * Generate background styles for a given base color
 * @param {string} baseColor - The base color name (e.g., 'teal', 'orange')
 * @returns {string} Tailwind CSS background classes
 */
const generateBackgroundStyles = baseColor => {
    return `bg-${baseColor}-100 dark:bg-${baseColor}-950`;
};

/**
 * Generate text styles for a given base color
 * @param {string} baseColor - The base color name (e.g., 'teal', 'orange')
 * @returns {string} Tailwind CSS text classes
 */
const generateTextStyles = baseColor => {
    return `text-${baseColor}-600 dark:text-${baseColor}-400`;
};

/**
 * Generate progress color styles for a given base color
 * @param {string} baseColor - The base color name (e.g., 'teal', 'orange')
 * @returns {string} Tailwind CSS progress color classes
 */
const generateProgressStyles = baseColor => {
    // Special case for orange to use -600 instead of -700 in dark mode
    const darkShade = baseColor === 'orange' ? '600' : '700';
    return `bg-${baseColor}-500 dark:bg-${baseColor}-${darkShade}`;
};

/**
 * Generate complete day styles for a given day type
 * @param {string} dayType - The day type (e.g., 'today', 'yesterday')
 * @returns {object} Complete day styles object
 */
const generateDayStyles = dayType => {
    const baseColor = DAY_BASE_COLORS[dayType];
    return {
        baseColor,
        border: generateBorderStyles(baseColor),
        background: generateBackgroundStyles(baseColor),
        text: generateTextStyles(baseColor),
        progressColor: generateProgressStyles(baseColor),
    };
};

/**
 * Day styles configuration object
 * Maps day types to their corresponding Tailwind CSS classes
 */
export const DAY_STYLES = {
    today: generateDayStyles('today'),
    yesterday: generateDayStyles('yesterday'),
    tomorrow: generateDayStyles('tomorrow'),
    past: generateDayStyles('past'),
    future: generateDayStyles('future'),
};
