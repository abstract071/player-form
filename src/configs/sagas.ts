import { all } from 'redux-saga/effects'

import playerFormSagaWatchers from 'player-form/sagas'


export default function* rootSaga() {
  yield all( [
    ...playerFormSagaWatchers
  ] )
}
