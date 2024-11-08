import { Container, Paper } from '@mui/material'

import SeasonPage from '@pages/season'
import RacePage from '@pages/race'
import RaceDetailsPage from '@pages/race-details'
import NotFoundPage from '@pages/not-found'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
const App = () => {
  return (
    <Container padding={1}>
      <Paper sx={{ paddingX: '16px' }} elevation={3}>
        <Router>
          <Routes>
            <Route path='/' element={<SeasonPage />} />
            <Route path='/season/:seasonId'>
              <Route index element={<RacePage />} />
              <Route path=':roundNumber' element={<RaceDetailsPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Paper>
    </Container>
  )
}

export default App
