import AttributeDisplay from '@components/common/ItemDisplay/AttributeDisplay'
import raceDetailsContext from '@context/RaceDetails/context'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useContext } from 'react'
const RaceDetailsList = () => {
  const { raceDetails, filteredDetails, searchedKey } =
    useContext(raceDetailsContext)
  const displayDetails = searchedKey ? filteredDetails : raceDetails

  if (!displayDetails?.Results?.length && searchedKey) {
    return (
      <Box>
        <Typography align='center' variant='h4' component='h4'>
          No results found
        </Typography>
      </Box>
    )
  }

  return (
    <>
      {displayDetails?.Results?.map(result => (
        <Box key={result.Driver.driverId}>
          <Card sx={{ marginBottom: '1rem', cursor: 'pointer' }}>
            <CardContent>
              <Box display={'flex'} gap={1}>
                <Box flex={1}>
                  <AttributeDisplay
                    value={`${result.Driver.givenName} ${result.Driver.familyName}`}
                    attribute='Name'
                  />
                </Box>
                <Box flex={1}>
                  <AttributeDisplay
                    value={result.Driver.nationality}
                    attribute='Nationality'
                  />
                </Box>
                <Box flex={1}>
                  <AttributeDisplay
                    value={result.Constructor.name}
                    attribute='Team'
                  />
                </Box>
                <Box flex={1}>
                  <AttributeDisplay
                    value={result.position}
                    attribute='Position'
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  )
}

export default RaceDetailsList
