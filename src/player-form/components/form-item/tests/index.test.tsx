import React from 'react'
import { shallow } from 'enzyme'

import { FormItem } from '../'


describe( 'FormItem', () => {
  const item = shallow(
    <FormItem
      level={ 1 }
      value=""
      label=""
      field={ jest.fn() }
      name=""
    />
  )

  it( 'renders properly', () => {
    expect( item ).toMatchSnapshot()
  } )
} )
