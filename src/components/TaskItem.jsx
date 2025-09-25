import React, { useState } from 'react'
import { Reorder } from 'motion/react'
import BaseItem from './BaseItem'
import { getCategoryBackground, getCategoryBorder } from '../constants/categories'

const TaskItem = ({ 
  task, 
  completed, 
  index, 
  onToggle, 
  onUpdate, 
  placeholderPrefix,
  category
}) => {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <Reorder.Item
      value={index}
      className={`flex px-3 py-1 rounded-lg border ${getCategoryBorder(category)} ${getCategoryBackground(category)} ${isDragging ? 'reorder-item-dragging' : 'cursor-grab'}`}
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
      <BaseItem
        task={task}
        completed={completed}
        onToggle={onToggle}
        onUpdate={onUpdate}
        placeholder={`${placeholderPrefix}...`}
        category={category}
        isDragging={isDragging}
      />
    </Reorder.Item>
  )
}

export default TaskItem
