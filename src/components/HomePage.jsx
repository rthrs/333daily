import React, { useEffect } from 'react';
import { useDailyData } from '../hooks/useLocalStorage';
import { useTimer } from '../hooks/useTimer';
import { MAIN_PROJECT_TARGET_DURATION } from '../utils/timeUtils';
import ProgressIndicator from './ProgressIndicator';
import ProjectCategory from './ProjectCategory';
import TaskCategory from './TaskCategory';
import Footer from './Footer';
import { useDateContext } from '../contexts/DateContext';
import AppTitle from './AppTitle';
import DateNavigation from './DateNavigation';

function HomePage() {
    const { currentDate } = useDateContext();
    const [dailyData, updateDailyData, reorderTasks] =
        useDailyData(currentDate);
    const { isTimerRunning, currentTimer, startTimer, stopTimer } = useTimer();

    const {
        tasks,
        completedTasks,
        timeSpent,
        taskOrder = { urgent: [0, 1, 2], maintenance: [0, 1, 2] },
    } = dailyData;

    // Handle date change - stop timer when changing days
    const handleDateChangeWithTimer = () => {
        if (isTimerRunning) {
            stopTimer();
        }
    };

    // Timer effect - updates time every second
    useEffect(() => {
        if (isTimerRunning && currentTimer === 'project') {
            const interval = setInterval(() => {
                updateDailyData({
                    timeSpent: {
                        ...timeSpent,
                        project: timeSpent.project + 1,
                    },
                });
            }, 1000); // Update every second

            return () => clearInterval(interval);
        }
    }, [isTimerRunning, currentTimer, timeSpent, updateDailyData]);

    const updateTask = (category, index, value) => {
        if (category === 'project') {
            updateDailyData({
                tasks: {
                    ...tasks,
                    [category]: value,
                },
            });
        } else {
            updateDailyData({
                tasks: {
                    ...tasks,
                    [category]: tasks[category].map((task, i) =>
                        i === index ? value : task
                    ),
                },
            });
        }
    };

    const toggleTask = (category, index) => {
        if (category === 'project') {
            updateDailyData({
                completedTasks: {
                    ...completedTasks,
                    [category]: !completedTasks[category],
                },
            });
        } else {
            updateDailyData({
                completedTasks: {
                    ...completedTasks,
                    [category]: completedTasks[category].map((completed, i) =>
                        i === index ? !completed : completed
                    ),
                },
            });
        }
    };

    const getCompletionPercentage = () => {
        const totalTasks = 7; // 1 project + 3 urgent + 3 maintenance
        const completedCount = Object.values(completedTasks)
            .flat()
            .filter(Boolean).length;
        return Math.round((completedCount / totalTasks) * 100);
    };

    const clearAllTasks = () => {
        if (
            window.confirm(
                'Are you sure you want to clear all tasks and time tracking for today?'
            )
        ) {
            updateDailyData(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            <div className="container mx-auto px-4 max-w-4xl h-full flex-1 flex flex-col">
                <AppTitle />

                <div className="flex flex-col space-y-5">
                    <DateNavigation
                        onDateChange={handleDateChangeWithTimer}
                        onClearAll={clearAllTasks}
                    />

                    <ProgressIndicator
                        completionPercentage={getCompletionPercentage()}
                    />
                    <ProjectCategory
                        title="3 Hours - Most Important Project"
                        tasks={tasks.project}
                        completedTasks={completedTasks.project}
                        category="project"
                        timeSpent={timeSpent.project}
                        timeTarget={MAIN_PROJECT_TARGET_DURATION}
                        isTimerRunning={isTimerRunning}
                        currentTimer={currentTimer}
                        onStartTimer={startTimer}
                        onToggleTask={toggleTask}
                        onUpdateTask={updateTask}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <TaskCategory
                            title="3 Urgent Tasks"
                            placeholderPrefix="Urgent Task"
                            tasks={tasks.urgent}
                            completedTasks={completedTasks.urgent}
                            category="urgent"
                            onToggleTask={toggleTask}
                            onUpdateTask={updateTask}
                            onReorderTasks={reorderTasks}
                            taskOrder={taskOrder.urgent}
                        />

                        <TaskCategory
                            title="3 Maintenance Activities"
                            placeholderPrefix="Maintenance Task"
                            tasks={tasks.maintenance}
                            completedTasks={completedTasks.maintenance}
                            category="maintenance"
                            onToggleTask={toggleTask}
                            onUpdateTask={updateTask}
                            onReorderTasks={reorderTasks}
                            taskOrder={taskOrder.maintenance}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
