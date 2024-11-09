import { Box, Card, CardActions, CardContent } from '@mui/material'

import ActionDisplay from '@components/common/ItemDisplay/ActionDisplay'
import AttributeDisplay from '@components/common/ItemDisplay/AttributeDisplay'
import useRedirection from '@components/common/utils'
import PropTypes from 'prop-types'

import DateDisplay from '../common/DateDisplay'
import PushPin from '../common/PushPin'


/**
 * A React component that displays a single race as a card.
 *
 * This component renders a single race as a card with the race name, circuit name,
 * date and a link to the race details page. It also displays a 'Push Pin' icon that
 * can be used to pin the race to the list of pinned races.
 *
 * @param {Object} race - The race object to be rendered as a card.
 * @param {string} race.raceName - The name of the race.
 * @param {string} race.Circuit.circuitName - The name of the circuit.
 * @param {string} race.date - The date of the race.
 * @param {string} race.url - The URL of the race details page.
 * @returns {React.ReactElement} A React element representing a single race as a card.
 */
const RaceCardItem = ({ race }) => {
  const handleRedirction = useRedirection(`./${race.round}`)
  return (
    <Card
      onClick={handleRedirction}
      sx={{
        height: '330px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      <CardContent>
        <Box
          marginBottom={'16px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box>
            <AttributeDisplay value={race.raceName} attribute='Race' />
          </Box>
          <PushPin race={race} />
        </Box>
        <AttributeDisplay
          value={race.Circuit.circuitName}
          attribute='Circut Name'
        />
      </CardContent>
      <CardActions
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box>
          <DateDisplay date={race.date} />
          <ActionDisplay url={race.url} />
        </Box>
      </CardActions>
    </Card>
  )
}

export default RaceCardItem

RaceCardItem.propTypes = {
  race: PropTypes.object.isRequired,
}
