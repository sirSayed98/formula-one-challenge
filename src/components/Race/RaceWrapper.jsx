import { useContext, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import raceContext from '@context/Race/context'
import { Box, Typography } from '@mui/material'
import CardListView from '@components/common/CardListView'
import CardView from './card/Container'
import ListView from './list/Container'
import ControlBar from '@components/common/ControlBar/ControlBar'
import LoadingProgress from '@components/common/Loading'
import Error from '@components/common/Error'

/**
 * RaceWrapper is a React component that provides a view for displaying a list of races.
 * It fetches and manages race data using a context-based state management approach.
 *
 * The component allows toggling between card and list views, changing the number of items
 * displayed per page, and paginating through the list of races. It shows a loading indicator
 * while data is being fetched and displays an error message if fetching fails.
 *
 * @returns {JSX.Element} A React element that renders the race list and control elements.
 */
const RaceWrapper = () => {
  const {
    fetchRaces,
    racesList,
    pageSize,
    offset,
    total,
    isLoading,
    hasError,
  } = useContext(raceContext)
  const { seasonId } = useParams()
  const [isCardView, setIsCardView] = useState(true)

  const toggleCardView = () => {
    setIsCardView(!isCardView)
  }

  const changePageSize = newPageSize => {
    fetchRaces(seasonId, newPageSize, 1)
  }
  const changePaginationPage = newPageOffset => {
    fetchRaces(seasonId, undefined, newPageOffset)
  }
  useEffect(() => {
    fetchRaces(seasonId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isLoading && hasError) {
    return <Error handleReload={() => fetchRaces(seasonId, pageSize, offset)} />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '95vh',
      }}
    >
      <Box sx={{ paddingY: '1rem' }}>
        <Typography align='center' variant='h3' component='h3'>
          Races
        </Typography>
      </Box>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <>
          <Box sx={{ overflowY: 'auto', height:'80%' }}>
            <CardListView isCardView={isCardView}>
              <ListView data={racesList} />
              <CardView data={racesList} />
            </CardListView>
          </Box>
          <Box>
            <ControlBar
              emitPageSize={changePageSize}
              emitPaginationPage={changePaginationPage}
              emitCardViewToggle={toggleCardView}
              isCardView={isCardView}
              pageSize={pageSize}
              offset={offset}
              total={total}
            />
          </Box>
        </>
      )}
    </Box>
  )
}

export default RaceWrapper
