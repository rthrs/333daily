export const INITIAL_TASK_ORDER = [0, 1, 2];
export const INITIAL_COMPLETED_TASKS = [false, false, false];

export const INITIAL_DAILY_DATA = {
    tasks: {
        project: '',
        urgent: ['', '', ''],
        maintenance: ['', '', ''],
    },
    completedTasks: {
        project: false,
        urgent: INITIAL_COMPLETED_TASKS,
        maintenance: INITIAL_COMPLETED_TASKS,
    },
    timeSpent: {
        project: 0,
    },
    taskOrder: {
        urgent: INITIAL_TASK_ORDER,
        maintenance: INITIAL_TASK_ORDER,
    },
};
