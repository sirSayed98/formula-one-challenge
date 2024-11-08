import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import PropTypes from 'prop-types'
/**
 * A dropdown component for selecting the number of items per page to display.
 * When the selection changes, the onPageSizeChange function will be called with
 * the new page size.
 *
 * @prop {number} pageSize - the current page size
 * @prop {function(number)} onPageSizeChange - a function to call when the page size changes
 */
export default function PageSizeDropdown({ pageSize, onPageSizeChange }) {
  const [selectedPageSize, setSelectedPageSize] = useState(pageSize || 10)

  const handleChange = event => {
    const newSize = event.target.value
    setSelectedPageSize(newSize)
    onPageSizeChange(newSize)
  }

  return (
    <FormControl variant='outlined' size='small' style={{ minWidth: 120 }}>
      <InputLabel>Page Size</InputLabel>
      <Select
        value={selectedPageSize}
        onChange={handleChange}
        label='Page Size'
      >
        {[5, 10, 20, 50, 100].map(size => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
// Define prop types
PageSizeDropdown.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
}
