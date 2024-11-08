import {
  CHANGE_SEASON_PAGE_SIZE,
  LOAD_SEASON_LIST,
  SET_LOADING_SEASON,
  SET_ERROR_SEASON,
} from './types'

/**
 * This reducer function handles the state of the season list component. It
 * manages the following actions:
 *
 * - CHANGE_SEASON_PAGE_SIZE: updates the page size of the season list
 * - LOAD_SEASON_LIST: updates the season list with the new set of seasons
 * - SET_LOADING_SEASON: sets the loading flag while the seasons are being loaded
 * - SET_ERROR_SEASON: sets the error flag if there was an error loading the seasons
 *
 * The reducer function takes the current state and the action object as
 * parameters and returns a new state object.
 *
 * @param {Object} state The current state of the seasons.
 * @param {Object} action The action object with the type and payload.
 * @returns {Object} The new state of the seasons.
 */

export default (state, action) => {
  switch (action.type) {
    case CHANGE_SEASON_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      }
    case LOAD_SEASON_LIST:
      return {
        ...state,
        seasonsList: action.payload.seasonsList,
        total: action.payload.total * 1,
        pageSize: action.payload.limit,
        offset: action.payload.offset,
        isLoading: false,
        hasError: false,
      }
    case SET_LOADING_SEASON:
      return {
        ...state,
        isLoading: action.payload,
      }
      case SET_ERROR_SEASON:
        return {
         ...state,
          hasError: action.payload,
        }
    default:
      return state
  }
}
