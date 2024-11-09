import { Box, Pagination } from '@mui/material'
import PropTypes from 'prop-types'
import CardListSwitcher from './CardListSwitcher'
import PageSizeDropdown from './PageSizeDropdown'
/**
 * The ControlBar component displays a set of controls for data visualization.
 * It shows a switcher for toggling between card and list views,
 * a dropdown for selecting the page size, and a pagination component.
 * It also handles the events for these controls.
 *
 * @prop {function} emitPageSize - function to call when page size changes
 * @prop {function} emitPaginationPage - function to call when pagination page changes
 * @prop {function} emitCardViewToggle - function to call when card view is toggled
 * @prop {boolean} isCardView - whether the view is currently in card mode
 * @prop {number} pageSize - the number of items to show per page
 * @prop {number} total - the total number of items
 * @prop {number} offset - the current pagination offset
 * @returns {JSX.Element} the ControlBar component
 */
const ControlBar = ({
  emitPageSize,
  emitPaginationPage,
  emitCardViewToggle,
  isCardView,
  pageSize,
  total,
  offset,
}) => {
  return (
    <Box display='flex' alignItems='center'>
      <CardListSwitcher isCardView={isCardView} onToggle={emitCardViewToggle} />
      <PageSizeDropdown pageSize={pageSize} onPageSizeChange={emitPageSize} />
      <Pagination
        count={Math.ceil(total / pageSize)}
        page={offset}
        onChange={(_, value) => {
          emitPaginationPage(value)
        }}
      />
    </Box>
  )
}

export default ControlBar

ControlBar.propTypes = {
  emitPageSize: PropTypes.func.isRequired,
  emitPaginationPage: PropTypes.func.isRequired,
  emitCardViewToggle: PropTypes.func.isRequired,
  isCardView: PropTypes.bool.isRequired,
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
}
