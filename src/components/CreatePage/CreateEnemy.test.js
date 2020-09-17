import React from 'react'
import 'jest-styled-components'
import CreateEnemy from './CreateEnemy'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'mutationobserver-shim'

describe('CreateEnemy', () => {
  it('should watch input correctly', () => {
    const { container } = render(<CreateEnemy />)
    const enemyName = container.querySelector("input[name='enemyName']")
    const HP = container.querySelector("input[name='HP']")
    const armorClass = container.querySelector("input[name='armorClass']")

    const initiative = container.querySelector("input[name='initiative']")

    fireEvent.input(enemyName, {
      target: {
        value: 'Enemy 1',
      },
    })
    fireEvent.input(HP, {
      target: {
        value: 50,
      },
    })
    fireEvent.input(armorClass, {
      target: {
        value: 18,
      },
    })
    fireEvent.input(initiative, {
      target: {
        value: 20,
      },
    })

    expect(enemyName.value).toEqual('Enemy 1')
    expect(HP.value).toEqual('50')
    expect(armorClass.value).toEqual('18')
    expect(initiative.value).toEqual('20')
  })
})
