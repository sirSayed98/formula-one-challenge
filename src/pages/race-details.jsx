import RaceDetailsWrapper from '@components/RaceDetails/RaceDetailsWrapper'
import RaceDetailsState from '@context/RaceDetails/state'

const RaceDetailsPage = () => {
  return (
    <RaceDetailsState>
      <RaceDetailsWrapper />
    </RaceDetailsState>
  )
}

export default RaceDetailsPage
