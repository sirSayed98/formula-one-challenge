import Error from '@components/common/Error'
import LoadingProgress from '@components/common/Loading'
import raceDetailsContext from '@context/RaceDetails/context'
import { Box, Grid, Typography } from '@mui/material'
import Alert from '@mui/material/Alert'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PerformanceChart from './PerformanceChart'
import RaceDetailsList from './RaceDetailsList'
import Search from './Search'

/**
 * A React component that displays the details of a race.
 *
 * This component renders a page with the race name, circuit name, date and
 * a link to the race details page. It also displays a 'Push Pin' icon that
 * can be used to pin the race to the list of pinned races.
 *
 * The component uses the `raceDetailsContext` to fetch the race details and
 * to keep track of the race details state.
 *
 * The component also renders a 'Loading...' message if the race details are
 * being fetched.
 *
 * If an error occurs while fetching the race details, the component renders
 * an 'Error' message with a button to reload the race details.
 *
 * The component renders a 'PerformanceChart' and a 'RaceDetailsList' if the
 * race details are successfully fetched.
 *
 * @returns {React.ReactElement} A React element representing the race details page.
 */
const RaceDetailsWrapper = () => {
  const { fetchRaceDetails, isLoading, hasError } =
    useContext(raceDetailsContext)
  const { seasonId, roundNumber } = useParams()

  useEffect(() => {
    fetchRaceDetails(seasonId, roundNumber)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!isLoading && hasError) {
    return (
      <Error handleReload={() => fetchRaceDetails(seasonId, roundNumber)} />
    )
  }

  return (
    <Box
      sx={{
        height: '95vh',
      }}
    >
      <Box sx={{ paddingTop: '2rem' }}>
        <Typography align='center' variant='h3' component='h3'>
          Race Details
        </Typography>
      </Box>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <Box sx={{ height: '100%' }} padding={'8px'}>
          <Grid container spacing={2} marginBottom={'32px'}>
            <Grid
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              item
              xs={12}
              md={4}
            >
              <Alert sx={{ alignItems: 'center' }} severity='warning'>
                Some drivers did not finish race so finish time not exist
              </Alert>
              <Search />
            </Grid>
            <Grid item xs={12} md={8}>
              <PerformanceChart />
            </Grid>
          </Grid>
          <Box sx={{ maxHeight: '50vh', overflowY: 'scroll' }}>
            <RaceDetailsList />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default RaceDetailsWrapper
