import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                process: 'readonly',
                localStorage: 'readonly',
                setTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                module: 'readonly',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            prettier,
        },
        rules: {
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern:
                        '^(React|ThemeProvider|DateProvider|HomePage|ThemeSwitcher|ProgressIndicator|ProjectCategory|TaskCategory|Footer|AppTitle|DateNavigation|ProgressBar|ProjectItem|BaseItem|TaskItem|Reorder|getDayText|NavigationButton|App)$',
                },
            ],
            'no-console': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        ignores: [
            'node_modules/',
            'dist/',
            'build/',
            '.next/',
            '.nuxt/',
            '.vuepress/dist/',
            '.serverless/',
            '.fusebox/',
            '.dynamodb/',
            '.tern-port/',
            'coverage/',
            '.nyc_output/',
            '*.log',
            'package-lock.json',
            'yarn.lock',
            'pnpm-lock.yaml',
        ],
    },
];
