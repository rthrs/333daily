import { useState, useEffect } from 'react';
import { INITIAL_DAILY_DATA } from '../constants';
import { clone, deepMergeRight } from '../utils/objectUtils';

export const useDailyData = currentDate => {
    const storageKey = `333daily_${currentDate}`;

    const [dailyData, setDailyData] = useLocalStorage(
        storageKey,
        INITIAL_DAILY_DATA
    );

    const updateCurrentDayData = updates => {
        if (updates === null || updates === undefined) {
            setDailyData(INITIAL_DAILY_DATA);
        } else {
            setDailyData(prev => ({
                ...prev,
                ...updates,
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
        }));
    };

    return [dailyData, updateCurrentDayData, reorderTasks];
};

export const useLocalStorage = (key, initialValue) => {
    const [currentValue, setCurrentValue] = useState(() =>
        getStoredValue(key, initialValue)
    );

    useEffect(() => {
        setCurrentValue(getStoredValue(key, initialValue));
    }, [key, initialValue]);

    const setValue = value => {
        try {
            let nextValue =
                typeof value === 'function' ? value(currentValue) : value;

            if (
                typeof nextValue === 'object' &&
                nextValue !== null &&
                !Array.isArray(nextValue)
            ) {
                nextValue = {
                    ...nextValue,
                    lastUpdated: new Date().toISOString(),
                };
            }
            setCurrentValue(nextValue);
            putStoredValue(key, nextValue);
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [currentValue, setValue];
};

const getStoredValue = (key, initialValue) => {
    const defaultResponse = clone(initialValue);

    try {
        const item = window.localStorage.getItem(key);

        if (item) {
            return deepMergeRight(defaultResponse, JSON.parse(item));
        }
    } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
    }

    return defaultResponse;
};

const putStoredValue = (key, nextValue) => {
    window.localStorage.setItem(key, JSON.stringify(nextValue));
};
