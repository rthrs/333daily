import React from 'react';
import BaseItem from './BaseItem';

const ProjectItem = ({ task, completed, onToggle, onUpdate, placeholder, category = 'project' }) => {
    return (
        <BaseItem
            task={task}
            completed={completed}
            onToggle={onToggle}
            onUpdate={onUpdate}
            placeholder={placeholder}
            category={category}
            isDragging={false}
            className="py-1"
        />
    );
};

export default ProjectItem;
