export const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export const getTimeProgress = (timeSpent, targetSeconds) => {
  return Math.min((timeSpent / targetSeconds) * 100, 100)
}

export const MAIN_PROJECT_TARGET_DURATION = 10800 // 3 hours in seconds
