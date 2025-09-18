export const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export const getTimeProgress = (timeSpent, targetSeconds) => {
  return Math.min((timeSpent / targetSeconds) * 100, 100)
}

export const TARGETS = {
  PROJECT: 10800, // 3 hours in seconds
  URGENT: 3600,   // 1 hour in seconds
  MAINTENANCE: 1800 // 30 minutes in seconds
}
