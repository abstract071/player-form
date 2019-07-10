import api from 'player-form/api'


export const fetchPlayerInfo = () => {
  return fetch( api.playerInfo() )
}

export const updatePlayerInfo = ( data: any ) => {
  return fetch( api.playerInfo(), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( data )
  } )
}
