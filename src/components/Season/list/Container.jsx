import PropTypes from 'prop-types'
import SeasonListItem from './Item'

/**
 * A React component that renders a list of SeasonListItem components.
 *
 * This component takes a single prop, data, which is an array of season objects.
 * It maps over the array and renders each season as a SeasonListItem component.
 *
 * @param {Object[]} data - An array of season objects.
 * @returns {JSX.Element} A React element representing a list of season list items.
 */
const SeasonListContainer = ({ data }) => {
  return (
    <>
      {data.map(season => (
        <SeasonListItem key={season.url} season={season} />
      ))}
    </>
  )
}

export default SeasonListContainer
SeasonListContainer.propTypes = {
  data: PropTypes.array.isRequired,
}
