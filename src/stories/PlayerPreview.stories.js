import React from 'react'
import PlayerPreview from '../components/CreatePage/PlayerPreview'

export default {
  title: 'Player Preview',
  component: PlayerPreview,
}
const creatureEntry = {
  playerName: 'test player 1',
  armorClass: 17,
  initiative: 20,
  _id: 5,
}

export const Enemy = () => (
  <PlayerPreview
    creatureEntry={creatureEntry}
    playerName={creatureEntry.playerName}
    armorClass={creatureEntry.armorClass}
    initiative={creatureEntry.initiative}
    key={creatureEntry._id}
  />
)
