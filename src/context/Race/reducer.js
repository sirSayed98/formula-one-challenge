import {
  CHANGE_RACE_PAGE_SIZE,
  LOAD_RACE_LIST,
  SET_LOADING_RACE,
  HANDLE_RACE_PIN,
  SET_ERROR_RACE,
} from './types'

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
