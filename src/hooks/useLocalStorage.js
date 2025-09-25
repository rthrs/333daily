import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            console.info(`Set initial localStorage valuer for key "${key}":`);
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            // Handle both direct values and function updates (like React setState)
            const newValue =
                typeof value === 'function' ? value(storedValue) : value;
            setStoredValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    // Update stored value when key changes
    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item));
            } else {
                setStoredValue(initialValue);
            }
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            setStoredValue(initialValue);
        }
    }, [key, initialValue]);

    return [storedValue, setValue];
};

const initialDailyData = {
    tasks: {
        project: '',
        urgent: ['', '', ''],
        maintenance: ['', '', ''],
    },
    completedTasks: {
        project: false,
        urgent: [false, false, false],
        maintenance: [false, false, false],
    },
    timeSpent: {
        project: 0,
    },
    taskOrder: {
        urgent: [0, 1, 2],
        maintenance: [0, 1, 2],
    },
    lastUpdated: new Date().toISOString(),
};

export const useDailyData = currentDate => {
    const storageKey = `333daily_${currentDate}`;

    const [dailyData, setDailyData] = useLocalStorage(
        storageKey,
        initialDailyData
    );

    const updateCurrentDayData = updates => {
        if (updates === null || updates === undefined) {
            setDailyData(initialDailyData);
        } else {
            setDailyData(prev => ({
                ...prev,
                ...updates,
                lastUpdated: new Date().toISOString(),
            }));
        }
    };

    const reorderTasks = (category, newOrder) => {
        setDailyData(prev => ({
            ...prev,
            taskOrder: {
                ...prev.taskOrder,
                [category]: newOrder,
            },
            lastUpdated: new Date().toISOString(),
        }));
    };

    return [dailyData, updateCurrentDayData, reorderTasks];
};
