import { combineReducers } from 'redux'

import playerInfoReducer from 'player-form/reducers'


export default combineReducers( {
  playerInfo: playerInfoReducer
} )
