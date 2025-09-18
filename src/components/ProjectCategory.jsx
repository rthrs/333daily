import React from 'react'
import { formatTime, getTimeProgress, TARGETS } from '../utils/timeUtils'

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
  onUpdateTask,
  currentDate
}) => {
  const progress = getTimeProgress(timeSpent, timeTarget)

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${color}`}>{title}</h3>
        <div className="text-sm text-gray-600">
          {formatTime(timeSpent)} / {formatTime(timeTarget)}
        </div>
      </div>
      
      {/* Time progress bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-300 ${color.replace('text-', 'bg-')}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Timer button */}
      <div className="mb-4">
        <button
          onClick={() => onStartTimer(category)}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
            isTimerRunning && currentTimer === category
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-primary-100 hover:bg-primary-200 text-primary-700'
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
            className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
          />
          <input
            key={`project-${currentDate}`}
            type="text"
            value={tasks}
            onChange={(e) => onUpdateTask(category, null, e.target.value)}
            placeholder="Your most important project..."
            className={`input-field flex-1 ${completedTasks ? 'line-through text-gray-500' : ''}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCategory
