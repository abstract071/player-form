import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Formik, Field, Form } from 'formik'

import List from 'player-form/components/list'

import {
  fetchPlayerInfo,
  updatePlayerInfo
} from 'player-form/actions'

import './styles.scss'


interface IFormPlayerProps {
  error: any,
  isLoading: boolean,
  player: any,
  fetchPlayerInfo: () => any,
  updatePlayerInfo: ( data: any ) => any
}

export class FormPlayer extends PureComponent<IFormPlayerProps> {
  static defaultProps: {
    error: null,
    isLoading: false,
    player: null,
    fetchPlayerInfo: () => {},
    updatePlayerInfo: () => {}
  }

  componentDidMount() {
    this.props.fetchPlayerInfo()
  }

  render() {
    const {
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
              <List
                data={ player }
                field={ Field }
              />
              { status && status.msg && <div>{ status.msg }</div> }
              <button type="submit" disabled={ isSubmitting }>
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
  player: playerInfo.data,
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
