import {
  FETCH_PLAYER_INFO_TRIGGER,
  UPDATE_PLAYER_INFO_TRIGGER
} from 'player-form/constants'


export const fetchPlayerInfo = () => ( {
  type: FETCH_PLAYER_INFO_TRIGGER
} )

export const updatePlayerInfo = ( data: any ) => ( {
  type: UPDATE_PLAYER_INFO_TRIGGER,
  payload: data
} )
