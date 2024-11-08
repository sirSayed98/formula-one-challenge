import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
/**
 * A functional component that displays a loading indicator.
 * 
 * This component renders a centered circular progress indicator
 * to indicate that content is loading.
 * 
 * @returns {JSX.Element} A Box component containing a CircularProgress component.
 */
const Loading = () => {
  return (
    <Box
      sx={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size='5rem' />
    </Box>
  )
}

export default Loading
