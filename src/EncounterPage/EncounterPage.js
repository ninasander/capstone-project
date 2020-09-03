import React from 'react'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'

export default function EncounterPage() {
  return (
    <>
      <EnemyEntry enemy="Enemy 1" maxHP={50} HP={50} ac={17} />
      <PlayerEntry player="Player 1" ac={16} />
      <EnemyEntry enemy="Enemy 2" maxHP={30} HP={30} ac={17} />
    </>
  )
}
