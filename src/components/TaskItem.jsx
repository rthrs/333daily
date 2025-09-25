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
  category
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

  return (
    <Reorder.Item
      value={index}
      className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 ${isDragging ? 'reorder-item-dragging' : 'cursor-grab'}`}
      style={{ 
        position: 'relative',
        cursor: isDragging ? 'grabbing' : 'grab',
        transform: isDragging ? 'scale(1.02)' : 'scale(1)',
        zIndex: isDragging ? 1000 : 'auto'
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
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
