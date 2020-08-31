import React from 'react'
import PlayerEntry from '../EncounterPage/PlayerEntry'

export default {
  title: 'Player Entry',
  component: PlayerEntry,
}

export const Player = () => <PlayerEntry player={'Player 1'} ac={16} />
