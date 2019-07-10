import React, { PureComponent } from 'react'

import Item from 'player-form/components/item'

import {
  isObject
} from 'utils/helpers'

import './styles.scss'


interface IListProps {
  level: number,
  data: any,
  field?: any
  fieldKey?: string,
}

export class List extends PureComponent<IListProps> {
  static defaultProps = {
    level: 1
  }

  list( { keys, data, level, fieldKey, field }: any ) {

    return keys.map( ( key: string ) => {
      const newFieldKey = `${ fieldKey ? fieldKey + '.' : '' }${ key }`
      return (
        <Item
          key={ newFieldKey }
          value={ data[key] }
          level={ level }
          field={ field }
          fieldKey={ newFieldKey }
          label={ key }
        >
          {
            isObject( data[key] ) ?
              <List
                fieldKey={ newFieldKey }
                level={ level + 1 }
                data={ data[key] }
                field={ field }
              />
              :
              null
          }
        </Item>
      )
    } )
  }

  render() {
    const {
      fieldKey,
      data,
      level,
      field
    } = this.props

    return (
      <ul styleName="list">
        {
          this.list( {
            keys: Object.keys( data ),
            data,
            level,
            fieldKey,
            field
          } )
        }
      </ul>
    )
  }
}


export default List
