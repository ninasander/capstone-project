import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CreatePage />)
    expect(tree).toMatchSnapshot()
  })
})
