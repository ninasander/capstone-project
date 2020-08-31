import GlobalStyles from '../src/GlobalStyles'
import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
