import {
  FETCH_PLAYER_INFO_REQUEST,
  FETCH_PLAYER_INFO_SUCCESS,
  FETCH_PLAYER_INFO_FAILURE,
  FETCH_PLAYER_INFO_FULFILL
} from 'player-form/constants'

type IState = {
  error: any,
  isLoading: boolean,
  data: any
}

type IAction = {
  type: string,
  payload: any
}

const INITIAL_STATE: IState = {
  error: null,
  isLoading: true,
  data: null
}

export const playerInfoReducer = ( state: IState = INITIAL_STATE, action: IAction ) => {
  switch ( action.type ) {
    case FETCH_PLAYER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_PLAYER_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case FETCH_PLAYER_INFO_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload
      }
    case FETCH_PLAYER_INFO_FULFILL:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default playerInfoReducer
