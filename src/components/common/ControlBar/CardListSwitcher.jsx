import ListIcon from '@mui/icons-material/List'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import { IconButton, Tooltip, Box } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description A component to switch between card view and list view.
 * @param {bool} isCardView - Whether to render in card view or not.
 * @param {func} onToggle - A function to call when the view is toggled.
 * @returns {ReactElement} A component with two icons to toggle view.
 */
export default function CardListSwitcher({ isCardView, onToggle }) {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Tooltip title='Card View'>
        <IconButton
          color={isCardView ? 'primary' : 'default'}
          onClick={onToggle}
        >
          <ViewModuleIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='List View'>
        <IconButton
          color={!isCardView ? 'primary' : 'default'}
          onClick={onToggle}
        >
          <ListIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

// Define prop types
CardListSwitcher.propTypes = {
  isCardView: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}
