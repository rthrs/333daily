import React from 'react'
import { useDateContext } from '../contexts/DateContext'

const TaskCategory = ({ 
  title, 
  placeholderPrefix,
  tasks, 
  completedTasks, 
  category, 
  color,
  onToggleTask,
  onUpdateTask
}) => {
  const { currentDate } = useDateContext()
  
  return (
    <div className="card card-dark">
      <h3 className={`text-lg font-semibold mb-4 ${color} ${
        color === 'text-red-600' 
          ? 'dark:text-red-400' 
          : color === 'text-green-600' 
            ? 'dark:text-green-400' 
            : 'dark:text-gray-200'
      }`}>{title}</h3>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={`${category}-${index}-${currentDate}`} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={completedTasks[index]}
              onChange={() => onToggleTask(category, index)}
              className="checkbox"
            />
            <input
              key={`${category}-input-${index}-${currentDate}`}
              type="text"
              value={task}
              onChange={(e) => onUpdateTask(category, index, e.target.value)}
              placeholder={`${placeholderPrefix} ${index + 1}...`}
              className={`input-field input-field-dark flex-1 ${completedTasks[index] ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskCategory
