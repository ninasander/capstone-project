import React, { useState } from 'react'
import EnemyEntry from './EnemyEntry'
import PlayerEntry from './PlayerEntry'
import PageButton from '../Buttons/PageButton'
import styled from 'styled-components/macro'
import TurnButton from '../Buttons/TurnButton'

export default function EncounterPage({ creatureEntries }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [turnNumber, setTurnNumber] = useState(1)
  const [roundNumber, setRoundNumber] = useState(1)

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
    .sort(
      (entry1, entry2) => Number(entry2.initiative) - Number(entry1.initiative)
    )

  return (
    <>
      {creaturesByInitiative.map((creatureEntry, index) =>
        creatureEntry.enemyName ? (
          <EnemyEntry
            index={index}
            activeIndex={activeIndex}
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
            playerName={creatureEntry.playerName}
            playerArmorClass={creatureEntry.playerArmorClass}
            playerInitiative={creatureEntry.playerInitiative}
            key={creatureEntry._id}
          />
        )
      )}
      <ButtonContainer>
        <TurnButton
          buttonText="Previous Turn"
          arrowSymbol={'←'}
          onClick={setLastTurn}
        />
        <TurnButton
          buttonText="Next Turn"
          arrowSymbol={'→'}
          onClick={setNextTurn}
        />
      </ButtonContainer>
      <TurnCounterStyled>
        Turn: {turnNumber}/{creaturesByInitiative.length}
      </TurnCounterStyled>
      <RoundCounterStyled>Round: {roundNumber}</RoundCounterStyled>
      <EndEncounterButtonContainer>
        <LinkStyled href="/">
          <PageButton onClick={onEndEncounter} buttonText="End Encounter" />
        </LinkStyled>
      </EndEncounterButtonContainer>
    </>
  )

  function setNextTurn() {
    setActiveIndex(
      activeIndex < creaturesByInitiative.length - 1 ? activeIndex + 1 : 0
    )
    setTurnNumber(
      turnNumber < creaturesByInitiative.length ? turnNumber + 1 : 1
    )
    setRoundNumber(
      turnNumber < creaturesByInitiative.length ? roundNumber : roundNumber + 1
    )
  }

  function setLastTurn() {
    setActiveIndex(
      activeIndex === 0 && roundNumber === 1
        ? 0
        : turnNumber === 1 && roundNumber > 1
        ? creaturesByInitiative.length - 1
        : activeIndex - 1
    )
    !(turnNumber === 1 && roundNumber === 1) &&
      setTurnNumber(
        turnNumber === 1 && roundNumber > 1
          ? creaturesByInitiative.length
          : turnNumber - 1
      )

    setRoundNumber(
      turnNumber === 1 && roundNumber > 1 ? roundNumber - 1 : roundNumber
    )
  }

  function onEndEncounter() {
    window.localStorage.clear()
  }
}

const EndEncounterButtonContainer = styled.div`
  margin-bottom: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TurnCounterStyled = styled.p`
  color: white;
  font-size: 112.5%;
  margin: 10px;
  text-align: center;
`
const RoundCounterStyled = styled.p`
  color: white;
  font-size: 112.5%;
  margin: 10px;
  text-align: center;
`

const LinkStyled = styled.a`
  text-decoration: none;
`
