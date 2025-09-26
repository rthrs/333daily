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
 * Complete styles configuration object with baseColor as keys
 * Organized by semantic usage with static Tailwind classes
 */
/* prettier-ignore */
export const STYLES_CONFIG = {
    teal: {
        // Navigation/Container styles
        navigation: {
            background: 'bg-teal-100 dark:bg-teal-950',
            border: 'border-teal-300 dark:border-teal-900',
            text: 'text-teal-700 dark:text-teal-400',
        },
        // Task item styles with hover states
        task: {
            background: 'bg-teal-100 dark:bg-teal-950 hover:bg-teal-200 dark:hover:bg-teal-900',
            border: 'border-teal-200 dark:border-teal-900 hover:border-teal-300 dark:hover:border-teal-600',
        },
        // Progress bar styles
        progress: 'bg-teal-500 dark:bg-teal-600',
    },
    orange: {
        navigation: {
            background: 'bg-orange-100 dark:bg-orange-950',
            border: 'border-orange-300 dark:border-orange-900',
            text: 'text-orange-700 dark:text-orange-400',
        },
        task: {
            background: 'bg-orange-100 dark:bg-orange-950 hover:bg-orange-200 dark:hover:bg-orange-900',
            border: 'border-orange-200 dark:border-orange-900 hover:border-orange-300 dark:hover:border-orange-600',
        },
        progress: 'bg-orange-500 dark:bg-orange-600',
    },
    sky: {
        navigation: {
            background: 'bg-sky-100 dark:bg-sky-950',
            border: 'border-sky-300 dark:border-sky-900',
            text: 'text-sky-700 dark:text-sky-400',
        },
        task: {
            background: 'bg-sky-100 dark:bg-sky-950 hover:bg-sky-200 dark:hover:bg-sky-900',
            border: 'border-sky-200 dark:border-sky-900 hover:border-sky-300 dark:hover:border-sky-600',
        },
        progress: 'bg-sky-500 dark:bg-sky-600',
    },
    red: {
        navigation: {
            background: 'bg-red-100 dark:bg-red-950',
            border: 'border-red-300 dark:border-red-900',
            text: 'text-red-700 dark:text-red-400',
        },
        task: {
            background: 'bg-red-100 dark:bg-red-950 hover:bg-red-200 dark:hover:bg-red-900',
            border: 'border-red-200 dark:border-red-900 hover:border-red-300 dark:hover:border-red-600',
        },
        progress: 'bg-red-500 dark:bg-red-600',
    },
    purple: {
        navigation: {
            background: 'bg-purple-100 dark:bg-purple-950',
            border: 'border-purple-300 dark:border-purple-900',
            text: 'text-purple-700 dark:text-purple-400',
        },
        task: {
            background: 'bg-purple-100 dark:bg-purple-950 hover:bg-purple-200 dark:hover:bg-purple-900',
            border: 'border-purple-200 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-600',
        },
        progress: 'bg-purple-500 dark:bg-purple-600',
    },
};
