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
