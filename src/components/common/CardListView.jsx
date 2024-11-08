import { Box, Fade, Grid, List } from '@mui/material'
import PropTypes from 'prop-types'

export default function CardListView({ children, isCardView }) {
  const [ListView, CardView] = children

  return (
    <>
      <Box>
        <Fade in={isCardView} timeout={500}>
          <Box sx={{ display: isCardView ? 'block' : 'none' }}>
            <Grid container spacing={3}>
              {CardView}
            </Grid>
          </Box>
        </Fade>

        <Fade in={!isCardView} timeout={500}>
          <Box sx={{ display: !isCardView ? 'block' : 'none' }}>
            <List>{ListView}</List>
          </Box>
        </Fade>
      </Box>
    </>
  )
}

CardListView.propTypes = {
  children: PropTypes.node.isRequired,
  isCardView: PropTypes.bool.isRequired,
}
