export const timeToMinutes = time => {
  if (!time) return 0

  if (time.startsWith('+')) return timeToMinutes(time.slice(1))

  if (!time.includes(':')) return parseInt(time) / 60 // --> seconds

  const parts = time.split(':')

  if (parts.length === 2) {
    // If format is "minutes:seconds"
    const [minutes, seconds] = parts
    return parseInt(minutes) + parseInt(seconds) / 60
  } else if (parts.length === 3) {
    // If format is "hours:minutes:seconds"
    const [hours, minutes, seconds] = parts
    return parseInt(hours) * 60 + parseInt(minutes) + parseInt(seconds) / 60
  }
}
