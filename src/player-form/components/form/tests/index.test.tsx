import React from 'react'
import { shallow } from 'enzyme'

import { FormPlayer } from '../'


describe( 'Form', () => {
  const button = shallow( <FormPlayer /> )

  it( 'renders properly', () => {
    expect( button ).toMatchSnapshot()
  } )
} )
