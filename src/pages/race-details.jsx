import RaceDetailsWrapper from '@components/RaceDetails/RaceDetailsWrapper'
import RaceDetailsState from '@context/RaceDetails/state'

/**
 * A React component that displays the race details page.
 *
 * The component wraps the RaceDetailsWrapper component with the RaceDetailsState
 * context provider. This allows the RaceDetailsWrapper component to access the
 * race details state and fetch the race details.
 *
 * @returns {React.ReactElement} A React element representing the race details page.
 */
const RaceDetailsPage = () => {
  return (
    <RaceDetailsState>
      <RaceDetailsWrapper />
    </RaceDetailsState>
  )
}

export default RaceDetailsPage
