import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const AppTitle = () => {
    return (
        <div className="flex mb-4 flex-col pt-6">
            <div className="flex justify-between items-start">
                <div className="flex-1"></div>
                <h1 className="flex-1 text-center text-4xl font-bold text-gray-900 dark:text-white mb-2 whitespace-nowrap">
                    333 Daily
                </h1>
                <div className="flex-1 flex justify-end">
                    <ThemeSwitcher />
                </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 m-4 text-center">
                Oliver Burkeman's 333 method: 3 hours to your most important
                project, 3 urgent tasks, 3 maintenance activities.
            </p>
        </div>
    );
};

export default AppTitle;
