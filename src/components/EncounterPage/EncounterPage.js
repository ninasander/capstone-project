import React from 'react'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'
import PageButton from '../Buttons/PageButton'

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
            initiative={creatureEntry.initiative}
            key={index}
          />
        ) : (
          <PlayerEntry
            playerName={creatureEntry.playerName}
            armorClass={creatureEntry.armorClass}
            initiative={creatureEntry.initiative}
            key={index}
          />
        )
      )}
      <a href="/">
        <PageButton onClick={onEndEncounter} buttonText="End Encounter" />
      </a>
    </>
  )

  function onEndEncounter() {
    window.localStorage.clear()
  }
}
