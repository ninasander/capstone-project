import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EnemyEntry from './EnemyEntry'
import 'jest-styled-components'

describe('EnemyEntry', () => {
  const enemyName = 'Enemy 1'
  const HP = 50
  const armorClass = 17
  const initiative = 20

  it('displays the enemy name', () => {
    const { getByText } = render(
      <EnemyEntry
        enemyName={enemyName}
        HP={HP}
        armorClass={armorClass}
        initiative={initiative}
      />
    )

    expect(getByText(enemyName)).toBeInTheDocument()
  })
  it('displays the current and max HP of the enemy', () => {
    const HPEntry = 'HP: ' + HP + '/' + HP
    const { getByText } = render(
      <EnemyEntry
        enemyName={enemyName}
        HP={HP}
        armorClass={armorClass}
        initiative={initiative}
      />
    )

    expect(getByText(HPEntry)).toBeInTheDocument()
  })
  it('displays the enemy AC', () => {
    const acEntry = 'AC: ' + armorClass
    const { getByText } = render(
      <EnemyEntry
        enemyName={enemyName}
        HP={HP}
        armorClass={armorClass}
        initiative={initiative}
      />
    )

    expect(getByText(acEntry)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <EnemyEntry
        enemyName={enemyName}
        HP={HP}
        armorClass={armorClass}
        initiative={initiative}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
