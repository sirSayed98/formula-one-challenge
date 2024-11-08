import PropTypes from 'prop-types'
import RaceListItem from './Item'

const RaceListContainer = ({ data }) => {
  return (
    <>
      {data.map(race => (
        <RaceListItem key={race.url} race={race} />
      ))}
    </>
  )
}

export default RaceListContainer

RaceListContainer.propTypes = {
  data: PropTypes.array.isRequired,
}
