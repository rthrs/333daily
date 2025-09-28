import { useDateContext } from '../contexts/DateContext';
import { getDayText } from '../utils/dateUtils';
import { useCurrentDateStyles } from '../hooks/useCurrentDateStyles';
import ProgressBar from './ProgressBar';

const ProgressIndicator = ({ completionPercentage }) => {
    const { currentDate } = useDateContext();
    const { styles } = useCurrentDateStyles();

    return (
        <div className="card p-4">
            <div className="flex mb-2 flex-col md:flex-row justify-between">
                <h3 className={`text-lg first-letter:uppercase font-semibold ${styles.navigation.text} mb-3 md:mb-0`}>
                    {getDayText(currentDate)}
                </h3>

                <div className="ml text-sm font-medium">
                    <span className={`font-light text-gray-600 dark:text-gray-300`}>Progress: &nbsp;</span>
                    <span className={`${styles.navigation.text} font-bold`}>{completionPercentage}%</span>
                </div>
            </div>
            <ProgressBar progress={completionPercentage} progressColor={styles.progress} />
        </div>
    );
};

export default ProgressIndicator;
