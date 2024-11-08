import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useContext } from 'react'
import raceDetailsContext from '@context/RaceDetails/context'

/**
 * A component that renders a search bar that allows the user to search for
 * race results by driver name. The component uses the `useContext` hook to
 * get the `searchByDriver` function from the `raceDetailsContext` and calls
 * it when the user types something in the search bar.
 *
 *
 * @returns {React.ReactElement} A React element representing the search bar.
 */

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
