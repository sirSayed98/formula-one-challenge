import RaceWrapper from '@components/Race/RaceWrapper'
import RaceState from '@context/Race/state'

const RacePage = () => {
  return (
    <RaceState>
      <RaceWrapper />
    </RaceState>
  )
}

export default RacePage
