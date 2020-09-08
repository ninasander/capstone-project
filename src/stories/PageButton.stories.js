import React from 'react'
import PageButton from '../components/Buttons/PageButton'

export default {
  title: 'Page Button',
  component: PageButton,
}

export const AddEnemy = () => <PageButton buttonText="Add Enemy" />
export const AddPlayer = () => <PageButton buttonText="Add Player" />
export const StartEncounter = () => <PageButton buttonText="Start Encounter" />
export const EndEncounter = () => <PageButton buttonText="End Encounter" />
