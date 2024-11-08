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
      <Box sx={{ height: '10%', paddingTop: '2rem' }}>
        <Typography align='center' variant='h3' component='h3'>
          Races
        </Typography>
      </Box>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <>
          <Box sx={{ height: '75%', overflowY: 'scroll' }}>
            <CardListView isCardView={isCardView}>
              <ListView data={racesList} />
              <CardView data={racesList} />
            </CardListView>
          </Box>
          <Box sx={{ height: '5%' }}>
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
