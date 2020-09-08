import React from 'react'
import 'jest-styled-components'
import CreatePlayer from './CreatePlayer'
import { render, fireEvent } from '@testing-library/react'

describe('CreateEnemy', () => {
  it('should watch input correctly', () => {
    const { container } = render(<CreatePlayer />)
    const playerName = container.querySelector("input[name='playerName']")
    const armorClass = container.querySelector("input[name='armorClass']")
    const initiative = container.querySelector("input[name='initiative']")

    fireEvent.input(playerName, {
      target: {
        value: 'Player 1',
      },
    })
    fireEvent.input(armorClass, {
      target: {
        value: 15,
      },
    })
    fireEvent.input(initiative, {
      target: {
        value: 18,
      },
    })

    expect(playerName.value).toEqual('Player 1')
    expect(armorClass.value).toEqual(15)
    expect(initiative.value).toEqual(18)
  })
})
