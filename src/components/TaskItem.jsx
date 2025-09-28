import { useState } from 'react';
import { Reorder } from 'motion/react';
import BaseItem from './BaseItem';

const TaskItem = ({ task, completed, index, onToggle, onUpdate, placeholderPrefix, category }) => {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <Reorder.Item
            value={index}
            className={`${isDragging ? 'reorder-item-dragging' : 'cursor-grab'}`}
            style={{
                position: 'relative',
                cursor: isDragging ? 'grabbing' : 'grab',
                transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                zIndex: isDragging ? 1000 : 'auto',
            }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
                setIsDragging(false);
                // Force a small delay to ensure state resets properly
                setTimeout(() => setIsDragging(false), 50);
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
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="8" cy="6" r="1.5" />
                    <circle cx="8" cy="12" r="1.5" />
                    <circle cx="8" cy="18" r="1.5" />
                    <circle cx="16" cy="6" r="1.5" />
                    <circle cx="16" cy="12" r="1.5" />
                    <circle cx="16" cy="18" r="1.5" />
                </svg>
            </BaseItem>
        </Reorder.Item>
    );
};

export default TaskItem;
