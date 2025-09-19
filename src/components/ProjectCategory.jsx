import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { formatTime, getTimeProgress } from '../utils/timeUtils'

const ProjectCategory = ({ 
  title, 
  tasks, 
  completedTasks, 
  category, 
  color, 
  timeSpent, 
  timeTarget,
  isTimerRunning,
  currentTimer,
  onStartTimer,
  onToggleTask,
  onUpdateTask
}) => {
  const { currentDate } = useDateContext()
  const progress = getTimeProgress(timeSpent, timeTarget)

  return (
    <div className="card card-dark">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${color} dark:text-blue-400`}>{title}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          {formatTime(timeSpent)} / {formatTime(timeTarget)}
        </div>
      </div>
      
      {/* Time progress bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-300 ${color.replace('text-', 'bg-')} dark:bg-blue-400`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Timer button */}
      <div className="mb-4">
        <button
          onClick={() => onStartTimer(category)}
          className={`btn-timer ${
            isTimerRunning && currentTimer === category
              ? 'btn-timer-active'
              : 'btn-timer-inactive'
          }`}
        >
          {isTimerRunning && currentTimer === category ? 'Stop Timer' : 'Start Timer'}
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={completedTasks}
            onChange={() => onToggleTask(category)}
            className="checkbox"
          />
          <input
            key={`project-${currentDate}`}
            type="text"
            value={tasks}
            onChange={(e) => onUpdateTask(category, null, e.target.value)}
            placeholder="Your most important project..."
            className={`input-field input-field-dark flex-1 ${completedTasks ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCategory
