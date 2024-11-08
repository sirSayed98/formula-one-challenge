import { Container, Paper } from '@mui/material'

import SeasonPage from '@pages/season'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
const App = () => {
  return (
    <Container padding={1}>
      <Paper sx={{ paddingX: '16px' }} elevation={3}>
        <Router>
          <Routes>
            <Route path='/' element={<SeasonPage />} />
          </Routes>
        </Router>
      </Paper>
    </Container>
  )
}

export default App
