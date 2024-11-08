import {
  CHANGE_RACE_PAGE_SIZE,
  LOAD_RACE_LIST,
  SET_LOADING_RACE,
  HANDLE_RACE_PIN,
  SET_ERROR_RACE,
} from './types'

/**
 * This reducer function handles the state of the race list component. It
 * manages the following actions:
 *
 * - CHANGE_RACE_PAGE_SIZE: updates the page size of the race list
 * - LOAD_RACE_LIST: updates the race list with the new set of races
 * - SET_LOADING_RACE: sets the loading flag while the races are being loaded
 * - HANDLE_RACE_PIN: sets the pinned flag for a race
 * - SET_ERROR_RACE: sets the error flag if there was an error loading the races
 *
 * The reducer function takes the current state and the action object as
 * parameters and returns a new state object.
 *
 * @param {Object} state The current state of the races.
 * @param {Object} action The action object with the type and payload.
 * @returns {Object} The new state of the races.
 */

export default (state, action) => {
  switch (action.type) {
    case CHANGE_RACE_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      }
    case LOAD_RACE_LIST:
      return {
        ...state,
        racesList: action.payload.racesList,
        total: action.payload.total * 1,
        pageSize: action.payload.limit,
        offset: action.payload.offset,
        isLoading: false,
        hasError: false,
      }
    case SET_LOADING_RACE:
      return {
        ...state,
        isLoading: action.payload,
      }
    case HANDLE_RACE_PIN:
      return {
        ...state,
        racesList: action.payload,
      }
    case SET_ERROR_RACE:
      return {
        ...state,
        hasError: action.payload,
      }
    default:
      return state
  }
}
