import React from 'react'
import { shallow } from 'enzyme'

import { Item } from '../'


describe( 'Item', () => {
  const item = shallow( <Item level={ 1 } value="" label="" /> )

  it( 'renders properly', () => {
    expect( item ).toMatchSnapshot()
  } )
} )
