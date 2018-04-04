import React from 'react'
import { expect } from 'chai'
import { configure, mount } from 'enzyme'
import { spy, stub } from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import axios from 'axios'

import Example from '../../javascripts/components/Example.js'

spy(Example.prototype, 'componentDidMount')
stub(axios, 'get').returns(Promise.resolve({
  data: { foo: 'bar' }
}))

describe('<Example />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Example />)
    expect(Example.prototype.componentDidMount.calledOnce).to.equal(true)
  })
})
