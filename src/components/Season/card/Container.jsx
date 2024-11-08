import { Grid } from '@mui/material'
import SeasonItem from './Item'

import PropTypes from 'prop-types'
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
