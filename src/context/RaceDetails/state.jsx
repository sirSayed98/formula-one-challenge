import { BASE_URL } from '@context/constants'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useReducer } from 'react'
import raceDetailsContext from './context.js'
import raceDetailsReducer from './reducer.js'

import {
  LOAD_RACE_DETAILS,
  SET_ERROR_RACE_DETAILS,
  SET_FILTERED_LIST,
  SET_LOADING_RACE_DETAILS,
} from './types'

/**
 * This component provides context-based state management for race details. It
 * fetches race details from an external API and updates the state based on the
 * received data. It also provides context values for accessing the state and
 * dispatching actions to update the state.
 *
 * The component fetches race details when the component mounts and when the
 * user selects a different race. It dispatches actions to update the state
 * when the race details are loaded.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will be
 * rendered within the RaceDetailsState provider.
 *
 * @returns {React.ReactElement} A React element that provides the race details
 * context to its children.
 */

const RaceState = props => {
  const initialState = {
    raceDetails: {},
    filteredDetails: {},
    isLoading: false,
    hasError: false,
    searchedKey:''
  }
  const [state, dispatch] = useReducer(raceDetailsReducer, initialState)

  const fetchRaceDetails = async (seasonId, roundNumber) => {
    dispatch({
      type: SET_LOADING_RACE_DETAILS,
      payload: true,
    })
    dispatch({
      type: SET_ERROR_RACE_DETAILS,
      payload: false,
    })

    try {
      const res = await axios.get(
        `${BASE_URL}/${seasonId}/${roundNumber}/results.json`,
      )
      const { RaceTable } = res.data.MRData

      dispatch({
        type: LOAD_RACE_DETAILS,
        payload: RaceTable.Races[0],
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR_RACE_DETAILS,
        payload: true,
      })
      console.log(error)
    } finally {
      dispatch({
        type: SET_LOADING_RACE_DETAILS,
        payload: false,
      })
    }
  }

  const searchByDriver = value => {
    const filteredList = state.raceDetails.Results.filter(result => {
      const fullName =
        `${result.Driver.givenName} ${result.Driver.familyName}`.toLowerCase()
      return fullName.includes(value.toLowerCase())
    })

    dispatch({
      type: SET_FILTERED_LIST,
      payload: {
        raceDetails: {
          ...state.raceDetails,
          Results: filteredList,
        },
        searchedKey: value,
      },
    })
  }

  return (
    <raceDetailsContext.Provider
      value={{
        raceDetails: state.raceDetails,
        filteredDetails: state.filteredDetails,
        isLoading: state.isLoading,
        hasError: state.hasError,
        searchedKey:state.searchedKey,
        fetchRaceDetails,
        searchByDriver,
      }}
    >
      {props.children}
    </raceDetailsContext.Provider>
  )
}
export default RaceState

RaceState.propTypes = {
  children: PropTypes.node.isRequired,
}
