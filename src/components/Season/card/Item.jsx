import { Card, CardActions, CardContent } from '@mui/material'
import PropTypes from 'prop-types'

import ActionDisplay from '@components/common/ItemDisplay/ActionDisplay'
import AttributeDisplay from '@components/common/ItemDisplay/AttributeDisplay'
import useRedirection from '@components/common/utils'

/**
 * A React component that displays a single season as a card.
 *
 * This component renders a single season as a card with the season number,
 * and a link to the season details page. It also displays a "Details" button
 * that can be used to navigate to the season details page.
 *
 * @param {Object} season - The season object to be rendered as a card.
 * @param {string} season.season - The number of the season.
 * @param {string} season.url - The URL of the season details page.
 * @returns {React.ReactElement} A React element representing a single season as a card.
 */
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
