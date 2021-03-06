import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import PlayerEntry from '../EncounterPage/PlayerEntry'
import 'jest-styled-components'

describe('PlayerEntry', () => {
  const creatureEntry = {
    playerName: 'Player 1',
    playerArmorClass: 17,
    playerInitiative: 20,
    _id: 10,
  }

  it('displays the player name', () => {
    const { getByText } = render(
      <PlayerEntry
        playerName={creatureEntry.playerName}
        playerArmorClass={creatureEntry.playerArmorClass}
        playerInitiative={creatureEntry.playerInitiative}
        key={creatureEntry._id}
      />
    )

    expect(getByText(creatureEntry.playerName)).toBeInTheDocument()
  })

  it('displays the player AC', () => {
    const acEntry = 'AC: ' + creatureEntry.playerArmorClass
    const { getByText } = render(
      <PlayerEntry
        playerName={creatureEntry.playerName}
        playerArmorClass={creatureEntry.playerArmorClass}
        playerInitiative={creatureEntry.playerInitiative}
        key={creatureEntry._id}
      />
    )

    expect(getByText(acEntry)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <PlayerEntry
        playerName={creatureEntry.playerName}
        playerArmorClass={creatureEntry.playerArmorClass}
        playerInitiative={creatureEntry.playerInitiative}
        key={creatureEntry._id}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
