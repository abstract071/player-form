import React, { PureComponent } from 'react'

import {
  isInteger,
  isValidURL
} from 'utils/helpers'

import './styles.scss'


interface IItemProps {
  level: number,
  value: any,
  label: string,
  field?: any
  fieldKey?: string,
}

export class Item extends PureComponent<IItemProps> {
  static defaultProps: {
    value: ''
  }

  renderField( { fieldKey: key, value, field: Field }: any ) {
    return (
      <Field
        name={ key }
        type={ isInteger( value ) ? 'number' : 'text' }
      />
    )
  }

  render() {
    const {
      value,
      label,
      level,
      field,
      fieldKey,
      children
    } = this.props

    return (
      <li styleName={ `item${ children ? ' column' : '' }` }>
        <div styleName={`label-wrapper${ children ? ' column' : '' }`}>
          <div styleName="label">
            <span
              styleName="mark"
              style={ { backgroundColor: `hsl(206, 90%, ${ 30 + ( level * 10 ) }%)` } }
            />
            { label }
          </div>
          {
            !children && field ?
              <div>{ this.renderField( { fieldKey, value, field } ) }</div>
              :
              children
          }
        </div>
        {
          isValidURL( value ) ?
            <div><img src={ value } alt="" /></div>
            :
            null
        }
      </li>
    )
  }
}


export default Item
