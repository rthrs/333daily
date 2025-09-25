export const getDayCategoryColor = dayStyles => {
    return dayStyles.text;
};

export const getDayCategoryBackground = dayStyles => {
    const { baseColor } = dayStyles;
    return `bg-${baseColor}-100 dark:bg-${baseColor}-950 hover:bg-${baseColor}-200 dark:hover:bg-${baseColor}-900`;
};

export const getDayCategoryBorder = dayStyles => {
    const { baseColor } = dayStyles;
    return `border-${baseColor}-200 dark:border-${baseColor}-700 hover:border-${baseColor}-300 dark:hover:border-${baseColor}-600`;
};
