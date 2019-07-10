export const isInteger = ( value: any ) => Number.isInteger( value )
export const isString = ( value: any ) => typeof value === 'string' || value instanceof String
export const isObject = ( value: any ) => typeof value === 'object' && value !== null
export const isValidURL = ( value: string ) => {
  return isString( value ) && !!value.match( /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g )
}
