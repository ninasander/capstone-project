import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EnemyPreview from '../CreatePage/EnemyPreview'
import 'jest-styled-components'

describe('EnemyPreview', () => {
  const creatureEntry = {
    enemyName: 'Enemy 1',
    HP: 50,
    armorClass: 17,
    initiative: 20,
    _id: 5,
  }

  it('displays the enemy name', () => {
    const { getByText } = render(
      <EnemyPreview
        handleDelete={jest.fn()}
        handleEdit={jest.fn()}
        creatureEntry={creatureEntry}
        key={creatureEntry._id}
      />
    )

    expect(getByText(creatureEntry.enemyName)).toBeInTheDocument()
  })
  it('displays the current and max HP of the enemy', () => {
    const HPEntry = 'HP: ' + creatureEntry.HP + '/' + creatureEntry.HP
    const { getByText } = render(
      <EnemyPreview
        handleDelete={jest.fn()}
        handleEdit={jest.fn()}
        creatureEntry={creatureEntry}
        key={creatureEntry._id}
      />
    )

    expect(getByText(HPEntry)).toBeInTheDocument()
  })
  it('displays the enemy AC', () => {
    const acEntry = 'AC: ' + creatureEntry.armorClass
    const { getByText } = render(
      <EnemyPreview
        handleDelete={jest.fn()}
        handleEdit={jest.fn()}
        creatureEntry={creatureEntry}
        key={creatureEntry._id}
      />
    )

    expect(getByText(acEntry)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <EnemyPreview
        handleDelete={jest.fn()}
        handleEdit={jest.fn()}
        creatureEntry={creatureEntry}
        key={creatureEntry._id}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
