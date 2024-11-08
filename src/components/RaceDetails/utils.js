/**
 * Converts a string time to minutes.
 * @param {string} time - a string in either "hours:minutes:seconds", "minutes:seconds", or "+seconds.milliseconds" format.
 * @returns {number} the time in minutes.
 */
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


/**
 * Maps race details to chart data for a line chart.
 * @param {Object} raceDetails - race details object from the Ergast API.
 * @returns {Object[]} an array of objects, each with a name and time property.
 */
export const mapRaceDetailsToChartData = raceDetails => {
  const firstRacerTime = timeToMinutes(raceDetails.Results[0]?.Time?.time)
  const raceData = raceDetails.Results.map((race, index) => {
    if (!race.Time) {
      return { name: race.Driver.givenName, time: null }
    }
    const racerTimeInMinutes =
      index === 0
        ? firstRacerTime
        : firstRacerTime + timeToMinutes(race.Time.time)
    return { name: race.Driver.givenName, time: racerTimeInMinutes }
  })
  return raceData
}
