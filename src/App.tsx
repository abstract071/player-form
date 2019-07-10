import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'

import PlayerForm from 'player-form/components/form'

import { store } from 'configs/store'

import 'scss/main.scss'


const App = () => {
  return (
    <Provider store={ store }>
      <PlayerForm />
    </Provider>
  )
}

export default hot( App )
