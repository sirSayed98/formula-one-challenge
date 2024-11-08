import { LOAD_RACE_DETAILS, SET_LOADING_RACE_DETAILS,SET_ERROR_RACE_DETAILS ,SET_FILTERED_LIST} from './types'

/**
 * This reducer function handles the state of the race details component.
 * It manages the following actions:
 *
 * - LOAD_RACE_DETAILS: updates the state with the race details payload
 * - SET_LOADING_RACE_DETAILS: sets the loading flag while the race details are being loaded
 * - SET_ERROR_RACE_DETAILS: sets the error flag if there was an error loading the race details
 * - SET_FILTERED_LIST: updates the state with a filtered list based on search input
 *
 * The reducer function takes the current state and the action object as
 * parameters and returns a new state object.
 *
 * @param {Object} state - The current state of the race details.
 * @param {Object} action - The action object with the type and payload.
 * @returns {Object} The new state of the race details.
 */
export default (state, action) => {
  switch (action.type) {
    case LOAD_RACE_DETAILS:
      return {
        ...state,
        raceDetails: action.payload,
      }
    case SET_LOADING_RACE_DETAILS:
      return {
        ...state,
        isLoading: action.payload,
      }
      case SET_ERROR_RACE_DETAILS:
        return {
         ...state,
          hasError: action.payload,
        }
        case SET_FILTERED_LIST:
          return {
            ...state,
            filteredDetails: action.payload.raceDetails,
            searchedKey: action.payload.searchedKey
          }
    default:
      return state
  }
}
