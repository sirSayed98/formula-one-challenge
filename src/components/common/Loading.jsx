import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

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
