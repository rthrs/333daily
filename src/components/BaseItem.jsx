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
      <div className="flex items-center space-x-1 h-[40px]">
        {children}

        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="size-4 text-gray-400 dark:text-gray-500 bg-transparent border border-gray-400 dark:border-gray-500 rounded focus:ring-0 focus:ring-offset-0 cursor-pointer"
          style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
        />
      </div>

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
    </>
  )
}

export default BaseItem
