import { useEffect, useRef } from 'react';
import { useDateContext } from '../contexts/DateContext';
import { useTheme } from '../contexts/ThemeContext';
import { getTaskBackground, getTaskBorder } from '../utils/styleUtils';
import { useCurrentDateStyles } from '../hooks/useCurrentDateStyles';

const BaseItem = ({ task, completed, onToggle, onUpdate, placeholder, category, children, className = '' }) => {
    const { isDark } = useTheme();
    const { currentDate } = useDateContext();

    const { baseColor } = useCurrentDateStyles();

    const textareaRef = useRef(null);

    // Auto-resize textarea on mount and when task changes
    useEffect(() => {
        if (textareaRef.current) {
            // Reset height to 'auto' first to get accurate scrollHeight measurement
            // This ensures the textarea can both shrink and grow properly
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [task]);

    return (
        <div
            className={`flex px-3 rounded-lg border ${getTaskBorder(baseColor)} ${getTaskBackground(baseColor)} ${className}`}
        >
            <div className="flex items-center space-x-1 h-[2.5rem]">
                {children}

                <input type="checkbox" checked={completed} onChange={onToggle} className="size-4 cursor-pointer" />
            </div>

            <textarea
                ref={textareaRef}
                key={`${category}-input-${currentDate}-${isDark}`}
                value={task}
                onChange={e => onUpdate(e.target.value)}
                placeholder={placeholder}
                className={`task-textarea flex-1 ${completed && 'line-through text-gray-600 dark:text-gray-300'}`}
                rows={1}
                onInput={e => {
                    // Reset height to 'auto' first to get accurate scrollHeight measurement
                    // This ensures the textarea can both shrink and grow properly
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                }}
            />
        </div>
    );
};

export default BaseItem;
