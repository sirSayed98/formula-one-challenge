import { Container, Paper } from '@mui/material'

import NotFoundPage from '@pages/not-found'
import RacePage from '@pages/race'
import RaceDetailsPage from '@pages/race-details'
import SeasonPage from '@pages/season'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


/**
 * App component serves as the main entry point for the application,
 * setting up the routing structure. It uses React Router to define
 * routes for different pages, including the SeasonPage, RacePage,
 * and RaceDetailsPage. It also handles undefined routes by displaying
 * the NotFoundPage.
 *
 * @returns {JSX.Element} The main application component with defined
 * routes wrapped inside a Container and Paper component.
 */
const App = () => {
  return (
    <Container padding={1}>
      <Paper sx={{ paddingX: '16px',overflowY:'hidden' }} elevation={3}>
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
