import React from 'react'

const TaskCategory = ({ 
  title, 
  tasks, 
  completedTasks, 
  category, 
  color,
  onToggleTask,
  onUpdateTask,
  currentDate
}) => {
  return (
    <div className="card">
      <h3 className={`text-lg font-semibold mb-4 ${color}`}>{title}</h3>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={`${category}-${index}-${currentDate}`} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={completedTasks[index]}
              onChange={() => onToggleTask(category, index)}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
            />
            <input
              key={`${category}-input-${index}-${currentDate}`}
              type="text"
              value={task}
              onChange={(e) => onUpdateTask(category, index, e.target.value)}
              placeholder={`${title} task ${index + 1}...`}
              className={`input-field flex-1 ${completedTasks[index] ? 'line-through text-gray-500' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskCategory
