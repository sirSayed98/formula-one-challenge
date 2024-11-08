import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * AttributeDisplay is a component that displays an attribute-value pair.
 * It is used by the item display components to show the details of an item.
 *
 * @prop {string} attribute - the name of the attribute
 * @prop {string} value - the value of the attribute
 * @returns {JSX.Element} the component
 */
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
