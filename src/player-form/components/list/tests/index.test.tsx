import React from 'react'
import { shallow } from 'enzyme'

import { List } from '../'


describe( 'Form', () => {
  const button = shallow( <List data={ {} } /> )

  it( 'renders properly', () => {
    expect( button ).toMatchSnapshot()
  } )
} )
