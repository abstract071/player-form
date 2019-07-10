import React, { PureComponent } from 'react'

import {
  isInteger,
  isValidURL
} from 'utils/helpers'

import './styles.scss'


interface IFormItemProps {
  level: number,
  value: any,
  label: string,
  field: any
  name: string,
}

export class FormItem extends PureComponent<IFormItemProps> {
  renderField( { name: key, value, field: Field }: any ) {
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
      name,
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
              <div>{ this.renderField( { name, value, field } ) }</div>
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


export default FormItem
