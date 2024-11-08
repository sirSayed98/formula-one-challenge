import { Grid } from '@mui/material'
import SeasonItem from './Item'

import PropTypes from 'prop-types'
/**
 * This functional component is used to render a grid of season cards.
 * It takes one prop, data, which is an array of season objects.
 * It maps over the array and renders each season as a SeasonItem component.
 * @param {object} data - an array of season objects.
 * @returns {jsx} a grid of season cards.
 */
const SeasonCardContainer = ({ data }) => {
  return (
    <>
      {data.map(season => (
        <Grid item xs={12} sm={6} md={2} key={season.url} paddingBottom={1}>
          <SeasonItem season={season} />
        </Grid>
      ))}
    </>
  )
}

export default SeasonCardContainer


SeasonCardContainer.propTypes = {
  data: PropTypes.array.isRequired,
}
