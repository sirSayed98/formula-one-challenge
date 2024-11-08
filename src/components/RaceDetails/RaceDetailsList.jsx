import AttributeDisplay from '@components/common/ItemDisplay/AttributeDisplay'
import raceDetailsContext from '@context/RaceDetails/context'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useContext } from 'react'


/**
 * RaceDetailsList is a React component that displays a list of race details.
 * It fetches race details and filtered details from the raceDetailsContext.
 * If a search key is present, it displays the filtered details; otherwise,
 * it displays the complete race details. If no results are found for the
 * searched key, it displays a message indicating that no results were found.
 * 
 * The race details are displayed as a list of cards, each showing the driver's 
 * name, nationality, team, and position in the race.
 * 
 * @returns {JSX.Element} The component rendering a list of race details or a "No results found" message.
 */
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
