import ErrorIcon from '@mui/icons-material/Error'
import { Box, Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'
const Error = ({ handleReload }) => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
        <ErrorIcon fontSize='large' sx={{ width: '100%' }} />
        <Typography textAlign={'center'} marginY={'1rem'}>
          something went wrong while loading data
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Button sx={{ width: '200px' }} onClick={handleReload}>
          Retry
        </Button>
      </Box>
    </Box>
  )
}

export default Error

Error.propTypes = {
  handleReload: PropTypes.func.isRequired,
}
