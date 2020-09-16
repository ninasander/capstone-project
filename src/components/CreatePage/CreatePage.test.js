import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import '@testing-library/jest-dom'
import 'mutationobserver-shim'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders correctly', () => {
    const creatureEntries = [
      {
        enemyName: 'Enemy 1',
        HP: 50,
        armorClass: 17,
        initiative: 20,
        _id: 5,
      },
      {
        playerName: 'Player 1',
        playerArmorClass: 17,
        playerInitiative: 20,
        _id: 10,
      },
    ]
    const tree = renderer.create(
      <CreatePage creatureEntries={creatureEntries} />
    )
    expect(tree).toMatchSnapshot()
  })
})
