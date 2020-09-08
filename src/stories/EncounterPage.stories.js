import React from 'react'
import EncounterPage from '../components/EncounterPage/EncounterPage'

export default {
  title: 'Encounter Page',
  component: EncounterPage,
}

const Template = (args) => <EncounterPage {...args} />

export const EncounterList = Template.bind({})
EncounterList.args = {
  creatureEntries: [
    {
      enemyName: 'Enemy 1',
      HP: 50,
      armorClass: 18,
      initiative: 20,
    },
    { playerName: 'Player 1', armorClass: 15, initiative: 12 },
  ],
}
