import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EnemyEntry from '../EncounterPage/EnemyEntry'
import 'jest-styled-components'
import currentHP from './EnemyEntry'

describe('EnemyEntry', () => {
  const enemy = 'Enemy 1'
  const maxHP = 50
  const HP = 50
  const ac = 17

  it('displays the enemy name', () => {
    const { getByText } = render(
      <EnemyEntry enemy={enemy} maxHP={maxHP} ac={ac} HP={HP} />
    )

    expect(getByText(enemy)).toBeInTheDocument()
  })
  it('displays the current and max HP of the enemy', () => {
    const HPEntry = 'HP: ' + HP + '/' + maxHP
    const { getByText } = render(
      <EnemyEntry enemy={enemy} maxHP={maxHP} HP={HP} ac={ac} />
    )

    expect(getByText(HPEntry)).toBeInTheDocument()
  })
  it('displays the enemy AC', () => {
    const acEntry = 'AC: ' + ac
    const { getByText } = render(
      <EnemyEntry enemy={enemy} maxHP={maxHP} ac={ac} />
    )

    expect(getByText(acEntry)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <EnemyEntry enemy={enemy} maxHP={maxHP} ac={ac} />
    )
    expect(tree).toMatchSnapshot()
  })
})
