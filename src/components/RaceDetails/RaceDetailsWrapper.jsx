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
      <Box sx={{ height: '10%', paddingTop: '2rem' }}>
        <Typography align='center' variant='h3' component='h3'>
          Race Details
        </Typography>
      </Box>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <Box padding={'8px'}>
          <Grid container spacing={2} marginBottom={'32px'}>
            <Grid
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
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
          <Box sx={{ height: '40vh', overflowY: 'scroll' }}>
            <RaceDetailsList />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default RaceDetailsWrapper
