import { useState } from 'react';
import { Reorder } from 'motion/react';
import TaskItem from './TaskItem';
import { getNavigationTextColor } from '../utils/styleUtils';
import { useCurrentDateStyles } from '../hooks/useCurrentDateStyles';

const TaskCategory = ({
    title,
    placeholderPrefix,
    tasks,
    completedTasks,
    category,
    onToggleTask,
    onUpdateTask,
    onReorderTasks,
    taskOrder,
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const { baseColor } = useCurrentDateStyles();

    // Get ordered tasks based on taskOrder
    const orderedTasks = taskOrder.map(orderIndex => ({
        task: tasks[orderIndex],
        completed: completedTasks[orderIndex],
        originalIndex: orderIndex,
    }));

    const handleReorder = newOrder => {
        // newOrder contains the original indices in their new order
        // Convert to the new taskOrder array
        onReorderTasks(category, newOrder);
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="card">
            <h3
                className={`text-lg font-semibold mb-4 ${getNavigationTextColor(baseColor)}`}
            >
                {title}
            </h3>

            <Reorder.Group
                axis="y"
                values={orderedTasks.map(task => task.originalIndex)}
                onReorder={handleReorder}
                className={`space-y-3 transition-all duration-150 ${
                    isDragging
                        ? 'bg-blue-50 dark:bg-blue-900 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-lg p-2'
                        : ''
                }`}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                transition={{ duration: 0.15, ease: 'easeOut' }}
            >
                {orderedTasks.map(({ task, completed, originalIndex }) => (
                    <TaskItem
                        key={`${category}-${originalIndex}`}
                        task={task}
                        completed={completed}
                        index={originalIndex}
                        onToggle={() => onToggleTask(category, originalIndex)}
                        onUpdate={value =>
                            onUpdateTask(category, originalIndex, value)
                        }
                        placeholderPrefix={placeholderPrefix}
                        category={category}
                    />
                ))}
            </Reorder.Group>
        </div>
    );
};

export default TaskCategory;
