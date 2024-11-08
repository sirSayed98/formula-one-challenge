import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useContext } from 'react'
import raceDetailsContext from '@context/RaceDetails/context'
const SearchField = () => {
  const { searchByDriver } = useContext(raceDetailsContext)
  // TODO:
  // handle debounce
  return (
    <Box marginTop={'2rem'} component='form' noValidate autoComplete='off'>
      <TextField
        onChange={e => {
          searchByDriver(e.target.value)
        }}
        label='Search by Driver'
        variant='outlined'
      />
    </Box>
  )
}

export default SearchField
