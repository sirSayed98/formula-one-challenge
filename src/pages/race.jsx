import RaceWrapper from '@components/Race/RaceWrapper'
import RaceState from '@context/Race/state'

/**
 * A React component that displays the race page.
 *
 * The component wraps the RaceWrapper component with the RaceState
 * context provider. This allows the RaceWrapper component to access the
 * race list state and manage race data.
 *
 * @returns {React.ReactElement} A React element representing the race page.
 */
const RacePage = () => {
  return (
    <RaceState>
      <RaceWrapper />
    </RaceState>
  )
}

export default RacePage
