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
