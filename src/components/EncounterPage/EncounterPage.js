import React, { useState } from 'react'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'
import PageButton from '../Buttons/PageButton'
import styled from 'styled-components/macro'

export default function EncounterPage({ creatureEntries }) {
  const [activeIndex, setActiveIndex] = useState(null)
  console.log(activeIndex)

  const players = creatureEntries
    .slice()
    .filter((creatureEntry) => creatureEntry.playerName)
  const enemies = creatureEntries
    .slice()
    .filter((creatureEntry) => creatureEntry.enemyName)
  const playersToSort = players.map((player) => ({
    ...player,
    initiative: player.playerInitiative,
  }))
  const creaturesToSort = [...playersToSort, ...enemies]
  const creaturesByInitiative = creaturesToSort
    .slice()
    .sort((entry1, entry2) => entry1.initiative < entry2.initiative)

  console.log(creaturesByInitiative)

  return (
    <>
      {creaturesByInitiative.map((creatureEntry, index) =>
        creatureEntry.enemyName ? (
          <EnemyEntry
            index={index}
            activeIndex={activeIndex}
            // active={index === activeIndex}
            enemyName={creatureEntry.enemyName}
            armorClass={creatureEntry.armorClass}
            HP={creatureEntry.HP}
            initiative={creatureEntry.initiative}
            key={creatureEntry._id}
          />
        ) : (
          <PlayerEntry
            index={index}
            activeIndex={activeIndex}
            // active={index === activeIndex}
            playerName={creatureEntry.playerName}
            playerArmorClass={creatureEntry.playerArmorClass}
            playerInitiative={creatureEntry.playerInitiative}
            key={creatureEntry._id}
          />
        )
      )}
      <PageButton buttonText="<--" onClick={setLastTurn} />
      <PageButton buttonText="-->" onClick={setNextTurn} />
      <LinkStyled href="/">
        <PageButton onClick={onEndEncounter} buttonText="End Encounter" />
      </LinkStyled>
    </>
  )
  function setNextTurn() {
    setActiveIndex(activeIndex === null ? 0 : activeIndex + 1)
  }
  function setLastTurn() {
    setActiveIndex(
      activeIndex === null ? creaturesByInitiative.length - 1 : activeIndex - 1
    )
  }

  function onEndEncounter() {
    window.localStorage.clear()
  }
}

const LinkStyled = styled.a`
  text-decoration: none;
`
