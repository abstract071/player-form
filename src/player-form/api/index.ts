export default {
  playerInfo: ( id?: string ) => `https://randomuser.me/api/?exc=login,id,nat,registered${ id || '' }`
}
