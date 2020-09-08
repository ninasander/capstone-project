import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import PlayerEntry from '../EncounterPage/PlayerEntry'
import 'jest-styled-components'

describe('PlayerEntry', () => {
  const playerName = 'Player 1'
  const armorClass = 16
  const initiative = 18

  it('displays the player name', () => {
    const { getByText } = render(
      <PlayerEntry
        playerName={playerName}
        armorClass={armorClass}
        initiative={initiative}
      />
    )

    expect(getByText(playerName)).toBeInTheDocument()
  })

  it('displays the player AC', () => {
    const acEntry = 'AC: ' + armorClass
    const { getByText } = render(
      <PlayerEntry
        playerName={playerName}
        armorClass={armorClass}
        initiative={initiative}
      />
    )

    expect(getByText(acEntry)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <PlayerEntry
        playerName={playerName}
        armorClass={armorClass}
        initiative={initiative}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
