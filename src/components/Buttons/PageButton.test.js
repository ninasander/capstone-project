import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import PageButton from './PageButton'

describe('PageButton', () => {
  it('renders Add Enemy button correctly', () => {
    const tree = renderer.create(<PageButton buttonText="Add Enemy" />)
    expect(tree).toMatchSnapshot()
  })
  it('renders Add Player button correctly', () => {
    const tree = renderer.create(<PageButton buttonText="Add Player" />)
    expect(tree).toMatchSnapshot()
  })
  it('renders Start Encounter button correctly', () => {
    const tree = renderer.create(<PageButton buttonText="Start Encounter" />)
    expect(tree).toMatchSnapshot()
  })
  it('renders End Encounter button correctly', () => {
    const tree = renderer.create(<PageButton buttonText="End Encounter" />)
    expect(tree).toMatchSnapshot()
  })
  it('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn()

    const { getByText } = render(
      <PageButton onClick={onClickMock} buttonText="Add Enemy" />
    )
    const button = getByText('Add Enemy')
    userEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
  })
})
