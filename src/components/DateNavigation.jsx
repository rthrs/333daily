import { useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useDateContext } from '../contexts/DateContext';
import { formatDate as formatDate, getDayName } from '../utils/dateUtils';
import { useCurrentDateStyles } from '../hooks/useCurrentDateStyles';
import NavigationIconButton from './NavigationIconButton';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import TrashIcon from './icons/TrashIcon';

const DateNavigation = ({ onDateChange, onClearAll }) => {
    const { isDark } = useTheme();
    const { currentDate, goToPreviousDay, goToNextDay, goToToday, handleDateChange } = useDateContext();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const dateInputRef = useRef(null);

    const { styles } = useCurrentDateStyles();

    const handleDateInputChange = newDate => {
        handleDateChange(newDate);
        onDateChange && onDateChange(newDate);
        setShowDatePicker(false);
    };

    const handleCalendarClick = () => {
        setShowDatePicker(true);
        // Focus the date input after a brief delay to ensure it's rendered
        setTimeout(() => {
            if (dateInputRef.current) {
                dateInputRef.current.showPicker();
            }
        }, 100);
    };

    const handleTodayClick = () => {
        goToToday();
        onDateChange && onDateChange(currentDate);
    };

    return (
        <div className={`card p-0 dark:text-gray-100`}>
            <div
                className={`card space-y-4 px-4 border-y-0 border-x-24 ${styles.navigation.background} ${styles.navigation.border}`}
            >
                <div className="text-center">
                    <h2
                        className={`text-3xl font-bold hover:opacity-80 transition-opacity cursor-pointer ${styles.navigation.text}`}
                        onClick={handleCalendarClick}
                    >
                        {formatDate(currentDate)}
                    </h2>
                    <p className={`text-lg font-light mt-1`}>{getDayName(currentDate)}</p>

                    {/* Hidden date input positioned under date */}
                    {showDatePicker && (
                        <input
                            ref={dateInputRef}
                            type="date"
                            name="date"
                            value={currentDate}
                            onChange={e => handleDateInputChange(e.target.value)}
                            className="sr-only"
                            style={{
                                colorScheme: isDark ? 'dark' : 'light',
                            }}
                            required
                        />
                    )}
                </div>

                <div className="flex items-center justify-center space-x-2">
                    <NavigationIconButton
                        onClick={() => {
                            const newDate = goToPreviousDay();
                            onDateChange && onDateChange(newDate);
                        }}
                        title="Previous day"
                    >
                        <ChevronLeftIcon className="w-5 h-5" />
                    </NavigationIconButton>

                    <NavigationIconButton
                        onClick={() => {
                            const newDate = goToNextDay();
                            onDateChange && onDateChange(newDate);
                        }}
                        title="Next day"
                    >
                        <ChevronRightIcon className="w-5 h-5" />
                    </NavigationIconButton>

                    <NavigationIconButton onClick={handleTodayClick} title="Go to today">
                        <span className="text-sm">Today</span>
                    </NavigationIconButton>

                    <NavigationIconButton onClick={onClearAll} title="Clear all data">
                        <TrashIcon className="w-5 h-5" />
                    </NavigationIconButton>
                </div>
            </div>
        </div>
    );
};

export default DateNavigation;
