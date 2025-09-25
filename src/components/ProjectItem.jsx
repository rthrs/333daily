import React, { useEffect, useRef } from 'react'
import { useDateContext } from '../contexts/DateContext'

const ProjectItem = ({ 
  task, 
  completed, 
  onToggle, 
  onUpdate, 
  placeholder
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
    <div className="flex items-center px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="checkbox"
      />

      {/* Project textarea */}
      <textarea
        ref={textareaRef}
        key={`project-input-${currentDate}`}
        value={task}
        onChange={(e) => onUpdate(e.target.value)}
        placeholder={placeholder}
        className={`task-textarea task-textarea-dark flex-1 ${
          completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
        }`}
        rows={1}
        onInput={(e) => {
          // Reset height to 'auto' first to get accurate scrollHeight measurement
          // This ensures the textarea can both shrink and grow properly
          e.target.style.height = 'auto'
          e.target.style.height = e.target.scrollHeight + 'px'
        }}
      />
    </div>
  )
}

export default ProjectItem
