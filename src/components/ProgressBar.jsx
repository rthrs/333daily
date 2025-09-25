import React from 'react'

const ProgressBar = ({ 
  progress, 
  progressColor, 
  height = 'h-2', 
  className = '' 
}) => {
  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full ${height} ${className}`}>
      <div 
        className={`${height} rounded-full transition-all duration-300 ${progressColor}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
