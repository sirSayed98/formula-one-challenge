import { Grid } from '@mui/material'
import PropTypes from 'prop-types'
import SeasonItem from './Item'

/**
 * This functional component is used to render a grid of race cards.
 * It takes one prop, data, which is an array of race objects.
 * It maps over the array and renders each race as a SeasonItem component.
 * @param {object} data - an array of race objects.
 * @returns {jsx} a grid of race cards.
 */
const RaceCardContainer = ({ data }) => {
  return (
    <>
      {data.map(race => (
        <Grid item xs={12} sm={6} md={3} key={race.url} paddingBottom={1}>
          <SeasonItem race={race} />
        </Grid>
      ))}
    </>
  )
}

export default RaceCardContainer


RaceCardContainer.propTypes = {
  data: PropTypes.array.isRequired,
}
