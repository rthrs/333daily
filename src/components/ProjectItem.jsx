import React from 'react';
import BaseItem from './BaseItem';
import {
    getDayCategoryBackground,
    getDayCategoryBorder,
} from '../utils/styleUtils';
import { useCurrentDateStyles } from '../hooks/useCurrentDateStyles';

const ProjectItem = ({
    task,
    completed,
    onToggle,
    onUpdate,
    placeholder,
    category = 'project',
}) => {
    const { baseColor } = useCurrentDateStyles();

    return (
        <div
            className={`flex px-3 py-1 rounded-lg border ${getDayCategoryBorder(baseColor)} ${getDayCategoryBackground(baseColor)}`}
        >
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
    );
};

export default ProjectItem;
