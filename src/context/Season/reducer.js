import {
  CHANGE_SEASON_PAGE_SIZE,
  LOAD_SEASON_LIST,
  SET_LOADING_SEASON,
  SET_ERROR_SEASON,
} from './types'

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
