import React from 'react'
import PlayerEntry from '../components/EncounterPage/PlayerEntry'

export default {
  title: 'Player Entry',
  component: PlayerEntry,
}

export const Player = () => (
  <PlayerEntry playerName={'Player 1'} armorClass={16} initiative={18} />
)
