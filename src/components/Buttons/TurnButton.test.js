import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import TurnButton from './TurnButton'

describe('TurnButton', () => {
  it('renders Previous Turn button correctly', () => {
    const tree = renderer.create(
      <TurnButton buttonText="Previous Turn" arrowSymbol={'←'} />
    )
    expect(tree).toMatchSnapshot()
  })
  it('renders Next Turn button correctly', () => {
    const tree = renderer.create(
      <TurnButton buttonText="Next Turn" arrowSymbol={'→'} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn()

    const { getByText } = render(
      <TurnButton
        onClick={onClickMock}
        buttonText="Previous Turn"
        arrowSymbol={'←'}
      />
    )
    const button = getByText('Previous Turn')
    userEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
  })
})
