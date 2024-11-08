import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const AttributDisplay = ({ attribute, value }) => {
  return (
    <>
      <Typography sx={{ color: 'text.secondary', fontSize: 24 }}>
        {attribute}
      </Typography>
      <Typography sx={{ color: 'text.primary' }}>{value}</Typography>
    </>
  )
}

export default AttributDisplay

AttributDisplay.propTypes = {
  attribute: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
