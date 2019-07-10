import React from 'react'
import { shallow } from 'enzyme'

import { List } from '../'


describe( 'List', () => {
  const list = shallow( <List data={ {} } /> )

  it( 'renders properly', () => {
    expect( list ).toMatchSnapshot()
  } )
} )
