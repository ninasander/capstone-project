import React from 'react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import HPCalculator from './HPCalculator'
import { addToHP } from './HPCalculator'
import { render } from '@testing-library/react'

describe('HPCalculator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HPCalculator />)
    expect(tree).toMatchSnapshot()
  })
  it('has a tel input field', () => {
    const { queryByRole } = render(<HPCalculator />)
    queryByRole('tel', { name: 'HPInput' })
  })

  //   it('adds input HP to current HP when add button is clicked', () => {
  //     const maxHP = 50
  //     const currentHP = 40
  //     const hpInputValue = 5

  //     expect(addToHP(maxHP, currentHP, hpInputValue)).toEqual(45)
  //   })
})
