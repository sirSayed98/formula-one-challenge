import ActionDisplay from '@components/common/ItemDisplay/ActionDisplay'
import AttributeDisplay from '@components/common/ItemDisplay/AttributeDisplay'
import useRedirection from '@components/common/utils'
import {
    Box,
    Card,
    CardContent,
    ListItem
} from '@mui/material'
import PropTypes from 'prop-types'

/**
 * A React component that displays a single season as a list item.
 *
 * This component renders a season as a list item with the season number and a link to the season details page.
 * It utilizes a `Box` component to create a clickable area that redirects to the season details page when clicked.
 * The season number is displayed using the `AttributeDisplay` component, and a link is rendered using the `ActionDisplay` component.
 *
 * @param {Object} season - The season object to be rendered.
 * @param {string} season.season - The number of the season.
 * @param {string} season.url - The URL of the season details page.
 * @returns {React.ReactElement} A React element representing a single season as a list item.
 */
const Item = ({ season }) => {
  const handleRedirction = useRedirection(`/season/${season.season}`)

  return (
    <>
      <Box
        onClick={handleRedirction}
        key={season.url}
        mb={2}
        sx={{
          cursor: 'pointer',
        }}
      >
        <Card>
          <CardContent>
            <ListItem>
              <Box
                display={'flex'}
                justifyContent={'space-evenly'}
                width={'100%'}
              >
                <Box>
                  <AttributeDisplay value={season.season} attribute='Season' />
                </Box>
                <ActionDisplay url={season.url} />
              </Box>
            </ListItem>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Item

Item.propTypes = {
  season: PropTypes.object.isRequired,
}
