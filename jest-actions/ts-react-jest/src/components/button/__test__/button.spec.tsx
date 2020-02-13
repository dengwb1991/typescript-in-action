import React from 'react'
import { Button } from '../index'
import { expect } from 'chai'
import { mount } from 'enzyme'

describe('Button Testing', function () {

  it('allows us to set props', () => {
    const wrapper = mount(<Button className="my-class"/>)
    expect(wrapper.props().className).to.equal('my-class')
  })
})