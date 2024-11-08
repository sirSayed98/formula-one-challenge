import raceContext from '@context/Race/context'
import PushPinIcon from '@mui/icons-material/PushPin'
import PropTypes from 'prop-types'
import { useContext } from 'react'
const PushPin = ({ race }) => {
  const { handleRacePin } = useContext(raceContext)
  return (
    <>
      <PushPinIcon
        sx={{ color: race.pinned ? 'blue' : 'black' }}
        onClick={e => {
          e.stopPropagation()
          const retrievedArray = JSON.parse(
            localStorage.getItem('pinnedRaces') || '[]',
          )
          const raceName = race.raceName.replace(/ /g, '')
          const index = retrievedArray.indexOf(raceName)
          if (index === -1) {
            retrievedArray.push(raceName)
          } else {
            retrievedArray.splice(index, 1)
          }
          localStorage.setItem('pinnedRaces', JSON.stringify(retrievedArray))
          handleRacePin()
        }}
      />
    </>
  )
}

export default PushPin

PushPin.propTypes = {
  race: PropTypes.object.isRequired,
}
