import React from 'react'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'

export default function EncounterPage({ creatureEntries }) {
  const creaturesByInitiative = creatureEntries
    .slice()
    .sort((entry1, entry2) => entry1.initiative < entry2.initiative)

  return (
    <>
      {creaturesByInitiative.map((creatureEntry, index) =>
        creatureEntry.enemyName ? (
          <EnemyEntry
            enemyName={creatureEntry.enemyName}
            armorClass={creatureEntry.armorClass}
            HP={creatureEntry.HP}
            key={index}
          />
        ) : (
          <PlayerEntry
            playerName={creatureEntry.playerName}
            armorClass={creatureEntry.armorClass}
            key={index}
          />
        )
      )}
      <a href="/">
        <button onClick={onEndEncounter}>End Encounter</button>
      </a>
    </>
  )

  function onEndEncounter() {
    window.localStorage.clear()
  }
}
