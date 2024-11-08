import { Box, Card, CardActions, CardContent } from '@mui/material'

import ActionDisplay from '@components/common/ItemDisplay/ActionDisplay'
import AttributeDisplay from '@components/common/ItemDisplay/AttributeDisplay'
import useRedirection from '@components/common/utils'
import PropTypes from 'prop-types'

import DateDisplay from '../common/DateDisplay'
import PushPin from '../common/PushPin'

const RaceCardItem = ({ race }) => {
  const handleRedirction = useRedirection(`./${race.round}`)
  return (
    <Card
      onClick={handleRedirction}
      sx={{
        height: '300px',
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
