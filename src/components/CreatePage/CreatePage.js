import React, { useState } from 'react'
import CreateMonster from './CreateEnemy'
import CreatePlayer from './CreatePlayer'
import PageButton from '../Buttons/PageButton'
import styled from 'styled-components/macro'
import EnemyPreview from './EnemyPreview'
import PlayerPreview from './PlayerPreview'
import useHeight from '../hooks/useHeight'
import { useSpring, animated } from 'react-spring'

export default function CreatePage({
  creatureEntries,
  addCreatureEntry,
  onClick,
}) {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)
  const { height, bind } = useHeight([EnemyPreview])
  const previewStyle = {
    ...useSpring({ height: isPreviewVisible ? height : 0 }),
  }

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
      {hasEnemy ? (
        <PageButton
          type="button"
          buttonText="Show Created Enemies ▼"
          onClick={togglePreview}
        />
      ) : null}
      <PreviewContainerStyled bind={bind} style={previewStyle}>
        {creatureEntries.map((creatureEntry) =>
          creatureEntry.enemyName ? (
            <EnemyPreview
              enemyName={creatureEntry.enemyName}
              armorClass={creatureEntry.armorClass}
              HP={creatureEntry.HP}
              initiative={creatureEntry.initiative}
              key={creatureEntry._id}
              onClick={() => deleteEntry(creatureEntry)}
            />
          ) : null
        )}
      </PreviewContainerStyled>
      <CreatePlayer addCreatureEntry={addCreatureEntry} />
      {hasPlayer ? (
        <PageButton
          type="button"
          buttonText="Show Created Players ▼"
          onClick={togglePreview}
        />
      ) : null}
      {creatureEntries.map((creatureEntry) =>
        creatureEntry.playerName ? (
          <PlayerPreview
            playerName={creatureEntry.playerName}
            armorClass={creatureEntry.armorClass}
            initiative={creatureEntry.initiative}
            key={creatureEntry._id}
          />
        ) : null
      )}
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

  function togglePreview() {
    console.log('toggle clicked')
    setIsPreviewVisible(!isPreviewVisible)
  }

  function deleteEntry(creatureEntry) {
    console.log('clicked')
    const index = creatureEntries.indexOf(creatureEntry)
    creatureEntries.splice(index, 1)
  }
}

const PreviewContainerStyled = styled.div`
  display: block;
  z-index: 200;
`

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
