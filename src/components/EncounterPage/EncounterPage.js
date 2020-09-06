import React from 'react'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'

export default function EncounterPage({ creatureEntries }) {
  console.log(creatureEntries)
  // const sortByInitiative = creatureEntries.sort(
  //   (entrie1, entrie2) => entrie1.initiative > entrie2.initiative
  // )

  return (
    <>
      {creatureEntries.map((creatureEntry, index) => (
        <EnemyEntry armorClass={creatureEntry.armorClass} key={index} />
      ))}

      {/* <EnemyEntry enemy="Enemy 1" maxHP={50} HP={50} ac={17} initiative={18} />
      <PlayerEntry player="Player 1" ac={16} />
      <EnemyEntry enemy="Enemy 2" maxHP={30} HP={30} ac={17} /> */}
    </>
  )
}
