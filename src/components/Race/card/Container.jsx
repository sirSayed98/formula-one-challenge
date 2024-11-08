import { Grid } from '@mui/material'
import SeasonItem from './Item'

import PropTypes from 'prop-types'
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
