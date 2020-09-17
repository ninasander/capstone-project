import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'

describe('EncounterPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <>
        <EnemyEntry
          enemyName={'Enemy 1'}
          HP={50}
          armorClass={17}
          initiative={20}
        />
        <PlayerEntry
          playerName={'Player 1'}
          playerArmorClass={16}
          playerInitiative={18}
        />
        <EnemyEntry
          enemyName={'Enemy 2'}
          HP={30}
          armorClass={17}
          initiative={12}
        />
      </>
    )
    expect(tree).toMatchSnapshot()
  })
})
