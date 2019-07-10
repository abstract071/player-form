import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  FETCH_PLAYER_INFO_TRIGGER,
  FETCH_PLAYER_INFO_REQUEST,
  FETCH_PLAYER_INFO_SUCCESS,
  FETCH_PLAYER_INFO_FAILURE,
  FETCH_PLAYER_INFO_FULFILL,
  UPDATE_PLAYER_INFO_TRIGGER,
  UPDATE_PLAYER_INFO_REQUEST,
  UPDATE_PLAYER_INFO_SUCCESS,
  UPDATE_PLAYER_INFO_FAILURE,
  UPDATE_PLAYER_INFO_FULFILL
} from 'player-form/constants'

import {
  fetchPlayerInfo,
  updatePlayerInfo
} from 'player-form/requests'


export function* fetchPlayerInfoSaga() {
  try {
    yield put( { type: FETCH_PLAYER_INFO_REQUEST } )
    const response = yield call( fetchPlayerInfo )
    if ( response.status === 404 ) throw new Error( 'Not found' )
    const data = yield response.json()
    yield put( {
      type: FETCH_PLAYER_INFO_SUCCESS,
      payload: data.results[0]
    } )
  } catch ( e ) {
    yield put( {
      type: FETCH_PLAYER_INFO_FAILURE,
      payload: e.message
    } )
  } finally {
    yield put( { type: FETCH_PLAYER_INFO_FULFILL } )
  }
}

export function* watchFetchPlayerInfoSaga() {
  yield takeLatest( FETCH_PLAYER_INFO_TRIGGER, fetchPlayerInfoSaga )
}

// FYI: not working, just boilerplate
export function* updatePlayerInfoSaga( action: any ) {
  try {
    console.log( action )
    yield put( { type: UPDATE_PLAYER_INFO_REQUEST } )
    const response = yield call( updatePlayerInfo, action.payload )
    if ( response.status === 404 ) throw new Error( 'Not found' )
    const data = yield response.json()
    yield put( {
      type: UPDATE_PLAYER_INFO_SUCCESS,
      payload: data
    } )
  } catch ( e ) {
    yield put( {
      type: UPDATE_PLAYER_INFO_FAILURE,
      payload: e.message
    } )
  } finally {
    yield put( { type: UPDATE_PLAYER_INFO_FULFILL } )
  }
}

export function* watchUpdatePlayerInfoSaga() {
  yield takeLatest( UPDATE_PLAYER_INFO_TRIGGER, updatePlayerInfoSaga )
}


export default [
  watchFetchPlayerInfoSaga(),
  watchUpdatePlayerInfoSaga()
]
