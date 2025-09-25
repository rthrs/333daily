import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { DateProvider } from './contexts/DateContext';
import HomePage from './components/HomePage';

function App() {
    return (
        <ThemeProvider>
            <DateProvider>
                <HomePage />
            </DateProvider>
        </ThemeProvider>
    );
}

export default App;
