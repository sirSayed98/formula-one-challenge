import { Button } from '@mui/material'
import PropTypes from 'prop-types'
const ActionDisplay = ({ url }) => {
  return (
    <Button href={url} target='_blank' data-target='learn-more' size='small'>
      Learn More
    </Button>
  )
}

export default ActionDisplay

ActionDisplay.propTypes = {
  url: PropTypes.string.isRequired,
}
