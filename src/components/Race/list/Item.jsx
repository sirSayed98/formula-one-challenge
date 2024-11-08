import { Box, Card, CardContent } from '@mui/material'
import PropTypes from 'prop-types'

import ActionDisplay from '@components/common/ItemDisplay/ActionDisplay'
import AttributeDisplay from '@components/common/ItemDisplay/AttributeDisplay'
import useRedirection from '@components/common/utils'
import DateDisplay from '../common/DateDisplay'
import PushPin from '../common/PushPin'

/**
 * A React component that displays a single race as a list item.
 *
 * This component renders a single race as a list item with the race name, circuit name,
 * date and a link to the race details page. It also displays a 'Push Pin' icon that
 * can be used to pin the race to the list of pinned races.
 *
 * @param {Object} race - The race object to be rendered as a list item.
 * @param {string} race.raceName - The name of the race.
 * @param {string} race.Circuit.circuitName - The name of the circuit.
 * @param {string} race.date - The date of the race.
 * @param {string} race.url - The URL of the race details page.
 * @returns {React.ReactElement} A React element representing a single race as a list item.
 */

const Item = ({ race }) => {
  const handleRedirction = useRedirection(`./${race.round}`)
  return (
    <Card
      onClick={handleRedirction}
      sx={{ marginBottom: '1rem', cursor: 'pointer' }}
    >
      <CardContent>
        <Box display={'flex'} gap={1}>
          <Box flex={1}>
            <AttributeDisplay value={race.raceName} attribute='Race' />
          </Box>
          <Box flex={1}>
            <AttributeDisplay
              value={race.Circuit.circuitName}
              attribute='Circut Name'
            />
          </Box>
          <Box display={'flex'} flex={1} justifyContent={'center'}>
            <Box display={'flex'} alignItems={'center'}>
              <DateDisplay date={race.date} />
            </Box>
          </Box>
          <Box display={'flex'} flex={1} justifyContent={'center'}>
            <ActionDisplay url={race.url} />
          </Box>
          <Box display={'flex'} flex={1} justifyContent={'center'} alignItems={'center'}>
            <PushPin race={race} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Item

Item.propTypes = {
  race: PropTypes.object.isRequired,
}
