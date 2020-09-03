import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import HPCalculator from './HPCalculator'
import { render } from '@testing-library/react'

describe('HPCalculator', () => {
  it('has a tel input field', () => {
    const { queryByRole } = render(<HPCalculator />)
    queryByRole('tel', { name: 'HPInput' })
  })
  it('has buttons', () => {
    const { getAllByRole } = render(<HPCalculator />)
    getAllByRole('button')
  })
  it('renders correctly', () => {
    const tree = renderer.create(<HPCalculator />)
    expect(tree).toMatchSnapshot()
  })
})
