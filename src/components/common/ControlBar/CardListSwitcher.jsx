import ListIcon from '@mui/icons-material/List'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import { IconButton, Tooltip, Box } from '@mui/material'
import PropTypes from 'prop-types'

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
