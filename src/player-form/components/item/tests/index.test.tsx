import React from 'react'
import { shallow } from 'enzyme'

import { Item } from '../'


describe( 'Form', () => {
  const button = shallow( <Item level={ 1 } value="" label="" /> )

  it( 'renders properly', () => {
    expect( button ).toMatchSnapshot()
  } )
} )
