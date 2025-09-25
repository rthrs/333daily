import React, { useEffect, useRef, useState } from 'react'
import { Reorder } from 'motion/react'
import { useDateContext } from '../contexts/DateContext'

const TaskItem = ({ 
  task, 
  completed, 
  index, 
  onToggle, 
  onUpdate, 
  placeholderPrefix,
  category,
  color
}) => {
  const { currentDate } = useDateContext()
  const textareaRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  // Auto-resize textarea on mount and when task changes
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to 'auto' first to get accurate scrollHeight measurement
      // This ensures the textarea can both shrink and grow properly
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [task])

  // Get background color based on category
  const getBackgroundColor = () => {
    if (color === 'text-red-600') {
      return 'bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30'
    } else if (color === 'text-green-600') {
      return 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30'
    } else if (color === 'text-blue-600') {
      return 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
    }
    return 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
  }

  return (
    <Reorder.Item
      value={index}
      className={`flex items-center px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 ${getBackgroundColor()} ${isDragging ? 'reorder-item-dragging' : 'cursor-grab'}`}
      style={{ 
        position: 'relative',
        cursor: isDragging ? 'grabbing' : 'grab',
        transform: isDragging ? 'scale(1.02)' : 'scale(1)',
        zIndex: isDragging ? 1000 : 'auto'
      }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        setIsDragging(false)
        // Force a small delay to ensure state resets properly
        setTimeout(() => setIsDragging(false), 50)
      }}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="checkbox"
        style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
      />

      {/* Task textarea */}
      <textarea
        ref={textareaRef}
        key={`${category}-input-${index}-${currentDate}`}
        value={task}
        onChange={(e) => onUpdate(e.target.value)}
        placeholder={`${placeholderPrefix}...`}
        className={`task-textarea task-textarea-dark flex-1 ${
          completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
        }`}
        rows={1}
        style={{ cursor: isDragging ? 'grabbing' : 'text' }}
        onInput={(e) => {
          // Reset height to 'auto' first to get accurate scrollHeight measurement
          // This ensures the textarea can both shrink and grow properly
          e.target.style.height = 'auto'
          e.target.style.height = e.target.scrollHeight + 'px'
        }}
      />
    </Reorder.Item>
  )
}

export default TaskItem
