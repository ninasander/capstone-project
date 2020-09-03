import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import PlayerEntry from '../EncounterPage/PlayerEntry'
import 'jest-styled-components'

describe('PlayerEntry', () => {
  const player = 'Player 1'
  const ac = 16

  it('displays the player name', () => {
    const { getByText } = render(<PlayerEntry player={player} ac={ac} />)

    expect(getByText(player)).toBeInTheDocument()
  })

  it('displays the player AC', () => {
    const acEntry = 'AC: ' + ac
    const { getByText } = render(<PlayerEntry player={player} ac={ac} />)

    expect(getByText(acEntry)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<PlayerEntry player={player} ac={ac} />)
    expect(tree).toMatchSnapshot()
  })
})
