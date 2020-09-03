import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'

describe('EncounterPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <>
        <EnemyEntry enemy={'Enemy 1'} maxHP={50} ac={17} />
        <PlayerEntry player={'Player 1'} ac={16} />
        <EnemyEntry enemy={'Enemy 2'} maxHP={30} ac={17} />
      </>
    )
    expect(tree).toMatchSnapshot()
  })
})
