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
