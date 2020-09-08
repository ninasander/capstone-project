import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import CalculatorButton from './CalculatorButton'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

describe('CalculatorButton', () => {
  it('renders addButton correctly', () => {
    const tree = renderer.create(<CalculatorButton operator="+" />)
    expect(tree).toMatchSnapshot()
  })
  it('renders subtractButton correctly', () => {
    const tree = renderer.create(<CalculatorButton operator="-" />)
    expect(tree).toMatchSnapshot()
  })
  it('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn()

    const { getByText } = render(
      <CalculatorButton onClick={onClickMock} operator="+" />
    )
    const button = getByText('+')
    userEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
  })
})
