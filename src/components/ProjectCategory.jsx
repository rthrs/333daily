import React from 'react'
import { useDateContext } from '../contexts/DateContext'
import { formatTime, getTimeProgress } from '../utils/timeUtils'
import ProjectItem from './ProjectItem'
import { getCategoryColor } from '../constants/categories'

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
    <div className="card card-dark mb-6">
      <div className="flex justify-between mb-4 flex-col md:flex-row">
        <h3 className={`text-lg font-semibold ${getCategoryColor(category)} mb-3 md:mb-0`}>{title}</h3>
        <div className="flex items-center space-x-3">
          <div className="text-sm font-light text-gray-600 dark:text-gray-300">
            {formatTime(timeSpent)} / {formatTime(timeTarget)}
          </div>
          <button
            onClick={() => onStartTimer(category)}
            className="btn-icon p-1 rounded-full"
            title={isTimerRunning && currentTimer === category ? 'Stop Timer' : 'Start Timer'}
          >
            {isTimerRunning && currentTimer === category ? (
              // Stop icon
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h12v12H6z"/>
              </svg>
            ) : (
              // Play icon
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
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


      <div className="space-y-3">
        <ProjectItem
          task={tasks}
          completed={completedTasks}
          onToggle={() => onToggleTask(category)}
          onUpdate={(value) => onUpdateTask(category, null, value)}
          placeholder="Your most important project..."
          category={category}
        />
      </div>
    </div>
  )
}

export default ProjectCategory
