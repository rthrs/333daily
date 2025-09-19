import React, { useState, useEffect } from 'react'
import { useDailyData } from './hooks/useLocalStorage'
import { useTimer } from './hooks/useTimer'
import { TARGETS } from './utils/timeUtils'
import Header from './components/Header'
import ProjectCategory from './components/ProjectCategory'
import TaskCategory from './components/TaskCategory'
import Footer from './components/Footer'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])
  const [dailyData, updateDailyData] = useDailyData(currentDate)
  const { isTimerRunning, currentTimer, startTimer, stopTimer } = useTimer()

  const { tasks, completedTasks, timeSpent } = dailyData

  // Handle date change - stop timer when changing days
  const handleDateChange = (newDate) => {
    if (isTimerRunning) {
      stopTimer()
    }
    setCurrentDate(newDate)
  }

  // Timer effect - updates time every second
  useEffect(() => {
    if (isTimerRunning && currentTimer === 'project') {
      const interval = setInterval(() => {
        updateDailyData({
          timeSpent: {
            ...timeSpent,
            project: timeSpent.project + 1
          }
        })
      }, 1000) // Update every second
      
      return () => clearInterval(interval)
    }
  }, [isTimerRunning, currentTimer, timeSpent, updateDailyData])

  const updateTask = (category, index, value) => {
    if (category === 'project') {
      updateDailyData({
        tasks: {
          ...tasks,
          [category]: value
        }
      })
    } else {
      updateDailyData({
        tasks: {
          ...tasks,
          [category]: tasks[category].map((task, i) => i === index ? value : task)
        }
      })
    }
  }

  const toggleTask = (category, index) => {
    if (category === 'project') {
      updateDailyData({
        completedTasks: {
          ...completedTasks,
          [category]: !completedTasks[category]
        }
      })
    } else {
      updateDailyData({
        completedTasks: {
          ...completedTasks,
          [category]: completedTasks[category].map((completed, i) => 
            i === index ? !completed : completed
          )
        }
      })
    }
  }

  const getCompletionPercentage = () => {
    const totalTasks = 7 // 1 project + 3 urgent + 3 maintenance
    const completedCount = Object.values(completedTasks).flat().filter(Boolean).length
    return Math.round((completedCount / totalTasks) * 100)
  }

  const clearAllTasks = () => {
    if (window.confirm('Are you sure you want to clear all tasks and time tracking for today?')) {
      updateDailyData(null);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <Header
          currentDate={currentDate}
          onDateChange={handleDateChange}
          completionPercentage={getCompletionPercentage()}
          onClearAll={clearAllTasks}
        />

        {/* Task Categories */}
        {/* First Row - 3 Hours Project */}
        <div className="mb-8">
          <ProjectCategory
            title="3 Hours - Most Important Project"
            tasks={tasks.project}
            completedTasks={completedTasks.project}
            category="project"
            color="text-blue-600"
            timeSpent={timeSpent.project}
            timeTarget={TARGETS.PROJECT}
            isTimerRunning={isTimerRunning}
            currentTimer={currentTimer}
            onStartTimer={startTimer}
            onToggleTask={toggleTask}
            onUpdateTask={updateTask}
            currentDate={currentDate}
          />
        </div>

        {/* Second Row - 3 Urgent Tasks | 3 Maintenance Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TaskCategory
            title="3 Urgent Tasks"
            tasks={tasks.urgent}
            completedTasks={completedTasks.urgent}
            category="urgent"
            color="text-red-600"
            onToggleTask={toggleTask}
            onUpdateTask={updateTask}
            currentDate={currentDate}
          />
          
          <TaskCategory
            title="3 Maintenance Activities"
            tasks={tasks.maintenance}
            completedTasks={completedTasks.maintenance}
            category="maintenance"
            color="text-green-600"
            onToggleTask={toggleTask}
            onUpdateTask={updateTask}
            currentDate={currentDate}
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App