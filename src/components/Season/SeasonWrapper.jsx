import { useContext, useEffect, useState } from 'react'

import CardListView from '@components/common/CardListView'
import ControlBar from '@components/common/ControlBar/ControlBar'
import LoadingProgress from '@components/common/Loading'
import seasonContext from '@context/Season/context'
import { Box, Typography } from '@mui/material'
import Error from '@components/common/Error'
import CardView from './card/Container'
import ListView from './list/Container'
const SeasonWrapper = () => {
  const {
    fetchSeasons,
    seasonsList,
    pageSize,
    offset,
    total,
    isLoading,
    hasError,
  } = useContext(seasonContext)
  const [isCardView, setIsCardView] = useState(true)

  const toggleCardView = () => {
    setIsCardView(!isCardView)
  }
  const changePageSize = newPageSize => {
    fetchSeasons(newPageSize, 1)
  }
  const changePaginationPage = newPageOffset => {
    fetchSeasons(undefined, newPageOffset)
  }
  useEffect(() => {
    fetchSeasons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isLoading && hasError) {
    return <Error handleReload={() => fetchSeasons(pageSize, offset)} />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '95vh',
      }}
    >
      <Box sx={{ height: '10%', paddingTop: '2rem' }}>
        <Typography align='center' variant='h3' component='h3'>
          Seasons
        </Typography>
      </Box>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <>
          <Box sx={{ height: '75%', overflowY: 'scroll' }}>
            <CardListView isCardView={isCardView}>
              <ListView data={seasonsList} />
              <CardView data={seasonsList} />
            </CardListView>
          </Box>
          <Box sx={{ height: '10%' }}>
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

export default SeasonWrapper
