import React from 'react'
import { Reorder } from 'motion/react'
import { useDateContext } from '../contexts/DateContext'

const TaskItem = ({ 
  task, 
  completed, 
  index, 
  onToggle, 
  onUpdate, 
  placeholderPrefix,
  category
}) => {
  const { currentDate } = useDateContext()

  return (
    <Reorder.Item
      value={index}
      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150"
      style={{ position: 'relative' }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {/* Drag handle */}
      <div className="drag-handle cursor-grab active:cursor-grabbing p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-100 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </div>

      {/* Checkbox */}
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="checkbox"
      />

      {/* Task input */}
      <input
        key={`${category}-input-${index}-${currentDate}`}
        type="text"
        value={task}
        onChange={(e) => onUpdate(e.target.value)}
        placeholder={`${placeholderPrefix}...`}
        className={`input-field input-field-dark flex-1 ${
          completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
        }`}
      />
    </Reorder.Item>
  )
}

export default TaskItem
