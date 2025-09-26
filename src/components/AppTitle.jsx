import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const AppTitle = () => {
    return (
        <div className="flex mb-4 flex-col pt-6">
            <div className="flex justify-between items-center">
                <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-300 mb-2 whitespace-nowrap">
                    333 Daily
                </h1>
                <ThemeSwitcher />
            </div>

            <p className="text-gray-600 dark:text-gray-400 m-4 text-center">
                Oliver Burkeman's 333 method: 3 hours to your most important
                project, 3 urgent tasks, 3 maintenance activities.
            </p>
        </div>
    );
};

export default AppTitle;
