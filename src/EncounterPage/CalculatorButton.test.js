import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import CalculatorButton from './CalculatorButton'

describe('CalculatorButton', () => {
  it('renders addButton correctly', () => {
    const tree = renderer.create(<CalculatorButton operator="+" />)
    expect(tree).toMatchSnapshot()
  })
  it('renders subtractButton correctly', () => {
    const tree = renderer.create(<CalculatorButton operator="-" />)
    expect(tree).toMatchSnapshot()
  })
})
