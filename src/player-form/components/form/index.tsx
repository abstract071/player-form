import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Formik, Field, Form } from 'formik'

import FormItem from 'player-form/components/form-item'

import {
  fetchPlayerInfo,
  updatePlayerInfo
} from 'player-form/actions'

import './styles.scss'

import { isObject } from 'utils/helpers'


interface IFormPlayerProps {
  error: any,
  isLoading: boolean,
  player: any,
  level: number,
  fetchPlayerInfo: () => any,
  updatePlayerInfo: ( data: any ) => any
}

export class FormPlayer extends PureComponent<IFormPlayerProps> {
  static defaultProps: IFormPlayerProps = {
    error: null,
    isLoading: false,
    player: null,
    level: 1,
    fetchPlayerInfo: () => {},
    updatePlayerInfo: () => {}
  }

  componentDidMount() {
    this.props.fetchPlayerInfo()
  }

  renderFieldsList( { keys, data, level, name, field }: any ) {
    return keys.map( ( key: string ) => {
      const newName = `${ name ? name + '.' : '' }${ key }`
      return (
        <FormItem
          key={ newName }
          value={ data[key] }
          level={ level }
          field={ field }
          name={ newName }
          label={ key }
        >
          {
            isObject( data[key] ) ?
              <ul styleName="list">
                {
                  this.renderFieldsList( {
                    keys: Object.keys( data[key] ),
                    data: data[key],
                    level: level + 1,
                    name: newName,
                    field
                  } )
                }
              </ul>
              :
              null
          }
        </FormItem>
      )
    } )
  }

  render() {
    const {
      level,
      player,
      isLoading,
      updatePlayerInfo
    } = this.props

    return (
      !isLoading ?
        <Formik
          initialValues={ player }
          onSubmit={ ( values ) => updatePlayerInfo( values ) }
          render={ ( { errors, status, touched, isSubmitting } ) => (
            <Form>
              <ul styleName="list root">
                {
                  this.renderFieldsList( {
                    keys: Object.keys( player ),
                    data: player,
                    level,
                    name,
                    field: Field
                  } )
                }
              </ul>
              { status && status.msg && <div>{ status.msg }</div> }
              <button
                styleName="btn"
                type="submit"
                disabled={ isSubmitting }
              >
                Submit
              </button>
            </Form>
          )}
        />
        :
        <div>Loading...</div>
    )
  }
}

const mapStateToProps = ( { playerInfo }: any ): any => ( {
  player: { player: playerInfo.data },
  error: playerInfo.error,
  isLoading: playerInfo.isLoading
} )

export default connect(
  mapStateToProps,
  {
    fetchPlayerInfo,
    updatePlayerInfo
  }
)( FormPlayer )
