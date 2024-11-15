import { BASE_URL } from '@context/constants'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useReducer } from 'react'
import seasonContext from './context.js'
import seasonReducer from './reducer.js'
import {
  LOAD_SEASON_LIST,
  SET_LOADING_SEASON,
  SET_ERROR_SEASON,
} from './types.js'


/**
 * SeasonState is a React component that provides context-based state management
 * for season-related data. It uses the `useReducer` hook to manage the state of
 * season data, including the list of seasons, loading status, error status, and
 * pagination information.
 *
 * The component fetches season data from an external API and updates the state
 * based on the received data. It also provides context values for accessing
 * the state and dispatching actions to update the state.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will be
 * rendered within the SeasonState provider.
 * 
 * @returns {React.ReactElement} A React element that provides the season context
 * to its children.
 */

const SeasonState = props => {
  const initialState = {
    seasonsList: [],
    isLoading: false,
    hasError: false,
    pageSize: 20,
    total: 0,
    offset: 1,
  }
  const [state, dispatch] = useReducer(seasonReducer, initialState)

  const fetchSeasons = async (pageSize, newOffset) => {
    const limit = pageSize || state.pageSize
    const offset = newOffset || state.offset

    dispatch({
      type: SET_LOADING_SEASON,
      payload: true,
    })

    dispatch({
      type: SET_ERROR_SEASON,
      payload: false,
    })

    try {

      const res = await axios.get(
        `${BASE_URL}/seasons.json?offset=${
          (offset - 1) * limit
        }&limit=${limit}`,
      )
      const { total, SeasonTable } = res.data.MRData
      dispatch({
        type: LOAD_SEASON_LIST,
        payload: {
          seasonsList: SeasonTable.Seasons,
          total,
          limit,
          offset,
        },
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR_SEASON,
        payload: true,
      })
      throw error;
    } finally {
      dispatch({
        type: SET_LOADING_SEASON,
        payload: false,
      })
    }
  }

  return (
    <seasonContext.Provider
      value={{
        seasonsList: state.seasonsList,
        isLoading: state.isLoading,
        hasError: state.hasError,
        pageSize: state.pageSize,
        total: state.total,
        offset: state.offset,
        fetchSeasons,
      }}
    >
      {props.children}
    </seasonContext.Provider>
  )
}
export default SeasonState

SeasonState.propTypes = {
  children: PropTypes.node.isRequired,
}
