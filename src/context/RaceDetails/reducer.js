import { LOAD_RACE_DETAILS, SET_LOADING_RACE_DETAILS,SET_ERROR_RACE_DETAILS ,SET_FILTERED_LIST} from './types'

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
