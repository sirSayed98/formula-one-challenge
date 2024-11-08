import TodayIcon from '@mui/icons-material/Today'
import { Typography, Box } from '@mui/material'
import { format, parse } from 'date-fns'
import PropTypes from 'prop-types'

const DateDisplay = ({ date }) => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Typography component='span' marginRight={1}>
        {format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM dd, yyyy')}
      </Typography>
      <TodayIcon fontSize='small' />
    </Box>
  )
}

export default DateDisplay

DateDisplay.propTypes = {
  date: PropTypes.string.isRequired,
}
