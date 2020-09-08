import React from 'react'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'
import PageButton from '../Buttons/PageButton'
import styled from 'styled-components'

export default function EncounterPage({ creatureEntries }) {
  const creaturesByInitiative = creatureEntries
    .slice()
    .sort((entry1, entry2) => entry1.initiative < entry2.initiative)

  return (
    <>
      {creaturesByInitiative.map((creatureEntry) =>
        creatureEntry.enemyName ? (
          <EnemyEntry
            enemyName={creatureEntry.enemyName}
            armorClass={creatureEntry.armorClass}
            HP={creatureEntry.HP}
            initiative={creatureEntry.initiative}
            key={creatureEntry.id}
          />
        ) : (
          <PlayerEntry
            playerName={creatureEntry.playerName}
            armorClass={creatureEntry.armorClass}
            initiative={creatureEntry.initiative}
            key={creatureEntry.id}
          />
        )
      )}
      <LinkStyled href="/">
        <PageButton onClick={onEndEncounter} buttonText="End Encounter" />
      </LinkStyled>
    </>
  )

  function onEndEncounter() {
    window.localStorage.clear()
  }
}

const LinkStyled = styled.a`
  text-decoration: none;
`
