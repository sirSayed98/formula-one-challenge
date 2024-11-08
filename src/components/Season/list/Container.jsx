import PropTypes from 'prop-types'
import SeasonListItem from './Item'

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
