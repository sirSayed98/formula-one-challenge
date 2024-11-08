import { Box, Fade, Grid, List } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * A component to conditionally render a list view or card view based on the `isCardView` prop.
 * @param {object} children - an array of two React elements: a List view and a Card view.
 *                           The first element is the List view and the second element is the Card view.
 * @param {boolean} isCardView - a boolean indicating whether to show the card view or the list view.
 * @returns {JSX.Element} a React component that renders either a card view or a list view.
 */
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
