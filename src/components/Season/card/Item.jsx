import { Card, CardActions, CardContent } from '@mui/material'
import PropTypes from 'prop-types'

import ActionDisplay from '@components/common/ItemDetails/ActionDisplay'
import AttributeDisplay from '@components/common/ItemDetails/AttributeDisplay'
import useRedirection from '@components/common/utils'

const SeasonCardItem = ({ season }) => {
  const handleRedirction = useRedirection(`/season/${season.season}`)
  return (
    <Card
      sx={{ cursor: 'pointer' }}
      onClick={handleRedirction}
    >
      <CardContent>
        <AttributeDisplay value={season.season} attribute='Season' />
      </CardContent>
      <CardActions>
        <ActionDisplay url={season.url} />
      </CardActions>
    </Card>
  )
}

export default SeasonCardItem

SeasonCardItem.propTypes = {
  season: PropTypes.object.isRequired,
}
