import React from 'react'
import Hello from '../hello'

import { shallow } from 'enzyme';

describe('Hello Testing', function () {

  it('dom', () => {
    const hw = shallow(<Hello color="block" name="World!"/>)
    expect(hw.contains(<h1>Hello World!</h1>)).toBeTruthy()
  })
})