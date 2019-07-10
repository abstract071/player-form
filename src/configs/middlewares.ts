import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()
let middlewares = [ sagaMiddleware ]

// run the saga
export const runSaga = () => sagaMiddleware.run( rootSaga )

export default middlewares
