import React from 'react';
import BaseItem from './BaseItem';
import {
    getDayCategoryBackground,
    getDayCategoryBorder,
} from '../constants/categories';
import { useDateContext } from '../contexts/DateContext';
import { getDateFlags } from '../utils/dateUtils';
import { getDayStyles } from '../utils/styleUtils';

const ProjectItem = ({
    task,
    completed,
    onToggle,
    onUpdate,
    placeholder,
    category = 'project',
}) => {
    const { currentDate } = useDateContext();
    const dateFlags = getDateFlags(currentDate);
    const dayStyles = getDayStyles(dateFlags);

    return (
        <div
            className={`flex px-3 py-1 rounded-lg border ${getDayCategoryBorder(dayStyles)} ${getDayCategoryBackground(dayStyles)}`}
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
