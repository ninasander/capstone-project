import React from 'react'
import CreateMonster from './CreateEnemy'
import CreatePlayer from './CreatePlayer'
import PageButton from '../Buttons/PageButton'
import styled from 'styled-components/macro'

export default function CreatePage({ creatureEntries, addCreatureEntry }) {
  const hasEnemy =
    creatureEntries?.filter((creatureEntry) => creatureEntry.enemyName)
      .length === 0
      ? false
      : true
  const hasPlayer =
    creatureEntries?.filter((creatureEntry) => creatureEntry.playerName)
      .length === 0
      ? false
      : true

  return (
    <FormsStyled>
      <CreateMonster addCreatureEntry={addCreatureEntry} />
      <CreatePlayer addCreatureEntry={addCreatureEntry} />
      {hasEnemy === true && hasPlayer === true ? (
        <a href="/encounter">
          <PageButton type="submit" buttonText="Start Encounter" />
        </a>
      ) : (
        <>
          <PageButton type="submit" buttonText="Start Encounter" />
          <WarningStyled>
            Please add at least one enemy and one player to your encounter.
          </WarningStyled>
        </>
      )}
    </FormsStyled>
  )
}

const FormsStyled = styled.div`
  margin: 20px;
  color: white;
  a {
    text-decoration: none;
  }
`
const WarningStyled = styled.p`
  font-size: 80%;
  text-align: center;
`
