/* eslint-disable no-undef */
import { timeToMinutes, mapRaceDetailsToChartData } from './utils'

describe('timeToMinutes', () => {
  it('should convert time in "hours:minutes:seconds.milliseconds" format to minutes', () => {
    expect(timeToMinutes('1:32:30.144')).toBe(92.5)
  })

  it('should convert time in "+seconds.milliseconds" format to minutes', () => {
    expect(timeToMinutes('+54.614')).toBe(0.9)
  })

  it('should convert time in "minutes:seconds" format to minutes', () => {
    expect(timeToMinutes('1:30')).toBe(1.5)
  })

  it('should convert time in "hours:minutes:seconds" format to minutes', () => {
    expect(timeToMinutes('1:01:30')).toBe(61.5)
  })

  it('should convert time in seconds to minutes', () => {
    expect(timeToMinutes('90')).toBe(1.5)
  })

  it('should return 0 when time is not provided', () => {
    expect(timeToMinutes(null)).toBe(0)
  })
})

describe('mapRaceDetailsToChartData', () => {
  it('should map race details to chart data', () => {
    const raceDetails = {
      Results: [
        {
          Driver: { givenName: 'Jane', familyName: 'Doe' },
          Time: { time: '1:30:00' },
        },
        {
          Driver: { givenName: 'John', familyName: 'Doe' },
          Time: { time: '+2:15' },
        },
      ],
    }
    const expectedChartData = [
      { name: 'Jane', time: 90 },
      { name: 'John', time: 92.25 },
    ]

    expect(mapRaceDetailsToChartData(raceDetails)).toEqual(expectedChartData)
  })
})
