import { Box, Pagination } from '@mui/material'
import PropTypes from 'prop-types'
import CardListSwitcher from './CardListSwitcher'
import PageSizeDropdown from './PageSizeDropdown'
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
    <Box display='flex' alignItems='center' gap={2} my={2}>
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
