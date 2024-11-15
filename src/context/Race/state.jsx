import { BASE_URL } from '@context/constants'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useReducer } from 'react'
import raceContext from './context.js'
import raceReducer from './reducer.js'
import {
  HANDLE_RACE_PIN,
  LOAD_RACE_LIST,
  SET_LOADING_RACE,
  SET_ERROR_RACE,
} from './types.js'


/**
 * RaceState is a React component that provides context-based state management
 * for race-related data. It uses the `useReducer` hook to manage the state of
 * race data, including the list of races, loading status, error status, and
 * pagination information.
 *
 * The component fetches race data from an external API and updates the state
 * based on the received data. It also provides context values for accessing
 * the state and dispatching actions to update the state.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will be
 * rendered within the RaceState provider.
 * 
 * @returns {React.ReactElement} A React element that provides the race context
 * to its children.
 */
const RaceState = props => {
  const initialState = {
    racesList: [],
    isLoading: false,
    hasError: false,
    pageSize: 5,
    total: 0,
    offset: 1,
  }
  const [state, dispatch] = useReducer(raceReducer, initialState)

  const fetchRaces = async (seasonId, pageSize, newOffset) => {
    const limit = pageSize || state.pageSize
    const offset = newOffset || state.offset

    dispatch({
      type: SET_LOADING_RACE,
      payload: true,
    })

    dispatch({
      type: SET_ERROR_RACE,
      payload: false,
    })

    try {
      const res = await axios.get(
        `${BASE_URL}/${seasonId}/races.json?offset=${
          (offset - 1) * limit
        }&limit=${limit}`,
      )

      const { total, RaceTable } = res.data.MRData

      const racesList = setPinnedRaces(RaceTable.Races)

      dispatch({
        type: LOAD_RACE_LIST,
        payload: {
          racesList,
          total,
          limit,
          offset,
        },
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR_RACE,
        payload: true,
      })
      console.log(error)
    } finally {
      dispatch({
        type: SET_LOADING_RACE,
        payload: false,
      })
    }
  }

  const setPinnedRaces = racesList => {
    const pinnedRaces = JSON.parse(localStorage.getItem('pinnedRaces') || '[]')
    const newRacesList = racesList.map(race => ({
      ...race,
      pinned: pinnedRaces.includes(race.raceName.replace(/ /g, '')),
    }))
    const sortedRaces = newRacesList.sort((a, b) => b.pinned - a.pinned)
    return sortedRaces
  }

  const handleRacePin = () => {
    const racesList = setPinnedRaces(state.racesList)
    dispatch({
      type: HANDLE_RACE_PIN,
      payload: racesList,
    })
  }

  return (
    <raceContext.Provider
      value={{
        racesList: state.racesList,
        isLoading: state.isLoading,
        hasError: state.hasError,
        pageSize: state.pageSize,
        total: state.total,
        offset: state.offset,
        fetchRaces,
        handleRacePin,
      }}
    >
      {props.children}
    </raceContext.Provider>
  )
}
export default RaceState

RaceState.propTypes = {
  children: PropTypes.node.isRequired,
}
