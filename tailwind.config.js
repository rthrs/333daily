/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    safelist: [
        // Day theme colors - using regex patterns for dynamic classes
        {
            pattern:
                /^(border|bg|text)-(teal|orange|sky|red|purple)-(100|200|300|400|500|600|700|950)$/,
        },
        {
            pattern:
                /^dark:(border|bg|text)-(teal|orange|sky|red|purple)-(100|200|300|400|500|600|700|950)$/,
        },
        {
            pattern:
                /^hover:(border|bg|text)-(teal|orange|sky|red|purple)-(100|200|300|400|500|600|700|950)$/,
        },
        {
            pattern:
                /^dark:hover:(border|bg|text)-(teal|orange|sky|red|purple)-(100|200|300|400|500|600|700|950)$/,
        },
    ],
};
