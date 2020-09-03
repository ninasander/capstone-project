import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import HPCalculator from './HPCalculator'
import { render } from '@testing-library/react'

describe('HPCalculator', () => {
  it('has an input field', () => {
    const { getByLabelText } = render(<HPCalculator />)
    const result = getByLabelText('HPInput')
    expect(result.length).toEqual(1)
  })
  it('has buttons', () => {
    const { getAllByRole } = render(<HPCalculator />)
    const result = getAllByRole('button')
    expect(result.length).toEqual(2)
  })
  it('renders correctly', () => {
    const tree = renderer.create(<HPCalculator />)
    expect(tree).toMatchSnapshot()
  })
})
