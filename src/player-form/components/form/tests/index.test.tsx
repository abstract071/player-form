import React from 'react'
import { shallow } from 'enzyme'

import { FormPlayer } from '../'


describe( 'Form', () => {
  const formPlayer = shallow(
    <FormPlayer
      fetchPlayerInfo={ jest.fn() }
    />
  )

  it( 'renders properly', () => {
    expect( formPlayer ).toMatchSnapshot()
  } )
} )
