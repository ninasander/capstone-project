import React from 'react'
import 'jest-styled-components'
import CreatePlayer from './CreatePlayer'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'mutationobserver-shim'

describe('CreatePlayer', () => {
  it('should watch input correctly', () => {
    const { container } = render(<CreatePlayer />)
    const playerName = container.querySelector("input[name='playerName']")
    const playerArmorClass = container.querySelector(
      "input[name='playerArmorClass']"
    )
    const playerInitiative = container.querySelector(
      "input[name='playerInitiative']"
    )

    fireEvent.input(playerName, {
      target: {
        value: 'Player 1',
      },
    })
    fireEvent.input(playerArmorClass, {
      target: {
        value: 15,
      },
    })
    fireEvent.input(playerInitiative, {
      target: {
        value: 18,
      },
    })

    expect(playerName.value).toEqual('Player 1')
    expect(playerArmorClass.value).toEqual('15')
    expect(playerInitiative.value).toEqual('18')
  })
})
