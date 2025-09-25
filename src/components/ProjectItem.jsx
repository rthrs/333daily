import React from 'react'
import BaseItem from './BaseItem'
import { getCategoryBackground, getCategoryBorder } from '../constants/categories'

const ProjectItem = ({ 
  task, 
  completed, 
  onToggle, 
  onUpdate, 
  placeholder,
  category = 'project'
}) => {
  return (
    <div className={`flex px-3 py-1 rounded-lg border ${getCategoryBorder(category)} ${getCategoryBackground(category)}`}>
      <BaseItem
        task={task}
        completed={completed}
        onToggle={onToggle}
        onUpdate={onUpdate}
        placeholder={placeholder}
        category={category}
        isDragging={false}
      />
    </div>
  )
}

export default ProjectItem
