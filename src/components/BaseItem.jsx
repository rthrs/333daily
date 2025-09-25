import React, { useEffect, useRef } from 'react'
import { useDateContext } from '../contexts/DateContext'

const BaseItem = ({ 
  task, 
  completed, 
  onToggle, 
  onUpdate, 
  placeholder,
  category,
  isDragging = false,
  children
}) => {
  const { currentDate } = useDateContext()
  const textareaRef = useRef(null)

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
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="checkbox h-[40px]"
        style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
      />

      <textarea
        ref={textareaRef}
        key={`${category}-input-${currentDate}`}
        value={task}
        onChange={(e) => onUpdate(e.target.value)}
        placeholder={placeholder}
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
      
      {children}
    </>
  )
}

export default BaseItem
