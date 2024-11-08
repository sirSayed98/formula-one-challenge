import { Button } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description A component that renders a button linking to a specified URL.
 * @param {Object} props - The properties object.
 * @param {string} props.url - The URL to which the button will link.
 * @returns {ReactElement} A button element that directs to the specified URL.
 */
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
