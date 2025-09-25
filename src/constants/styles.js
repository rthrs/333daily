/**
 * Style constants for the 333 Daily app
 */

/**
 * Mapping from day types to base colors
 */
export const DAY_TO_BASE_COLOR = {
    today: 'teal',
    yesterday: 'orange',
    tomorrow: 'sky',
    past: 'red',
    future: 'purple',
};

/**
 * Day styles configuration object with baseColor as keys
 */
export const DAY_STYLES = {
    teal: {
        border: 'border-teal-300 dark:border-teal-700',
        background: 'bg-teal-100 dark:bg-teal-950',
        text: 'text-teal-600 dark:text-teal-400',
        progressColor: 'bg-teal-500 dark:bg-teal-700',
    },
    orange: {
        border: 'border-orange-300 dark:border-orange-700',
        background: 'bg-orange-100 dark:bg-orange-950',
        text: 'text-orange-600 dark:text-orange-400',
        progressColor: 'bg-orange-500 dark:bg-orange-600',
    },
    sky: {
        border: 'border-sky-300 dark:border-sky-700',
        background: 'bg-sky-100 dark:bg-sky-950',
        text: 'text-sky-600 dark:text-sky-400',
        progressColor: 'bg-sky-500 dark:bg-sky-700',
    },
    red: {
        border: 'border-red-300 dark:border-red-700',
        background: 'bg-red-100 dark:bg-red-950',
        text: 'text-red-600 dark:text-red-400',
        progressColor: 'bg-red-500 dark:bg-red-700',
    },
    purple: {
        border: 'border-purple-300 dark:border-purple-700',
        background: 'bg-purple-100 dark:bg-purple-950',
        text: 'text-purple-600 dark:text-purple-400',
        progressColor: 'bg-purple-500 dark:bg-purple-700',
    },
};

/**
 * Static class mappings for category backgrounds
 */
export const CATEGORY_BACKGROUND_CLASSES = {
    teal: 'bg-teal-100 dark:bg-teal-950 hover:bg-teal-200 dark:hover:bg-teal-900',
    orange: 'bg-orange-100 dark:bg-orange-950 hover:bg-orange-200 dark:hover:bg-orange-900',
    sky: 'bg-sky-100 dark:bg-sky-950 hover:bg-sky-200 dark:hover:bg-sky-900',
    red: 'bg-red-100 dark:bg-red-950 hover:bg-red-200 dark:hover:bg-red-900',
    purple: 'bg-purple-100 dark:bg-purple-950 hover:bg-purple-200 dark:hover:bg-purple-900',
};

/**
 * Static class mappings for category borders
 */
export const CATEGORY_BORDER_CLASSES = {
    teal: 'border-teal-200 dark:border-teal-700 hover:border-teal-300 dark:hover:border-teal-600',
    orange: 'border-orange-200 dark:border-orange-700 hover:border-orange-300 dark:hover:border-orange-600',
    sky: 'border-sky-200 dark:border-sky-700 hover:border-sky-300 dark:hover:border-sky-600',
    red: 'border-red-200 dark:border-red-700 hover:border-red-300 dark:hover:border-red-600',
    purple: 'border-purple-200 dark:border-purple-700 hover:border-purple-300 dark:hover:border-purple-600',
};
