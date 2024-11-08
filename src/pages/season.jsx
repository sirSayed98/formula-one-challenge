import SeasonWrapper from '@components/Season/SeasonWrapper'
import SeasonState from '@context/Season/state'
/**
 * A React component that displays the season page.
 *
 * The component wraps the SeasonWrapper component with the SeasonState
 * context provider. This allows the SeasonWrapper component to access the
 * season list state and manage season data.
 *
 * @returns {React.ReactElement} A React element representing the season page.
 */
const SeasonPage = () => {
  return (
    <SeasonState>
      <SeasonWrapper />
    </SeasonState>
  )
}

export default SeasonPage
