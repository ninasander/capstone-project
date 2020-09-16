import React, { useState } from 'react'
import CreateEnemy from './CreateEnemy'
import CreatePlayer from './CreatePlayer'
import PageButton from '../Buttons/PageButton'
import styled from 'styled-components/macro'
import EnemyPreview from './EnemyPreview'
import PlayerPreview from './PlayerPreview'
import useEnemyPreviewHeight from '../hooks/useEnemyPreviewHeight'
import usePlayerPreviewHeight from '../hooks/usePlayerPreviewHeight'
import { useSpring, animated } from 'react-spring'

export default function CreatePage({
  creatureEntries,
  addCreatureEntry,
  deleteCreatureEntry,
  editCreatureEntry,
}) {
  const [isEnemyPreviewVisible, setIsEnemyPreviewVisible] = useState(false)
  const [isPlayerPreviewVisible, setIsPlayerPreviewVisible] = useState(false)
  const [editCreature, setEditCreature] = useState(undefined)

  const { heightEnemy, bindEnemy } = useEnemyPreviewHeight([])
  const { heightPlayer, bindPlayer } = usePlayerPreviewHeight([])
  const enemyPreviewStyle = {
    ...useSpring({ height: isEnemyPreviewVisible ? heightEnemy : 0 }),
  }
  const playerPreviewStyle = {
    ...useSpring({ height: isPlayerPreviewVisible ? heightPlayer : 0 }),
  }

  const hasEnemy = creatureEntries?.some(
    (creatureEntry) => creatureEntry.enemyName
  )

  const hasPlayer = creatureEntries?.some(
    (creatureEntry) => creatureEntry.playerName
  )

  return (
    <FormsStyled>
      <CreateEnemy
        editCreature={editCreature}
        setEditCreature={setEditCreature}
        editCreatureEntry={editCreatureEntry}
        addCreatureEntry={addCreatureEntry}
      />
      {hasEnemy ? (
        <PageButton
          type="button"
          buttonText={
            isEnemyPreviewVisible
              ? 'Hide Created Enemies ▲'
              : 'Show Created Enemies ▼'
          }
          onClick={toggleEnemyPreview}
        />
      ) : null}
      <PreviewContainerStyled {...bindEnemy} style={enemyPreviewStyle}>
        {creatureEntries.map(
          (creatureEntry) =>
            creatureEntry.enemyName && (
              <EnemyPreview
                creatureEntry={creatureEntry}
                key={creatureEntry._id}
                handleDelete={onDelete}
                handleEdit={onEdit}
              />
            )
        )}
      </PreviewContainerStyled>
      <CreatePlayer
        addCreatureEntry={addCreatureEntry}
        editCreature={editCreature}
        setEditCreature={setEditCreature}
        editCreatureEntry={editCreatureEntry}
      />
      {hasPlayer ? (
        <PageButton
          type="button"
          buttonText={
            isPlayerPreviewVisible
              ? 'Hide Created Players ▲'
              : 'Show Created Players ▼'
          }
          onClick={togglePlayerPreview}
        />
      ) : null}
      <PreviewContainerStyled {...bindPlayer} style={playerPreviewStyle}>
        {creatureEntries.map(
          (creatureEntry) =>
            creatureEntry.playerName && (
              <PlayerPreview
                creatureEntry={creatureEntry}
                key={creatureEntry._id}
                handleDelete={onDelete}
                handleEdit={onEdit}
              />
            )
        )}
      </PreviewContainerStyled>
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

  function onDelete(id) {
    const index = creatureEntries.findIndex(
      (creatureEntry) => creatureEntry._id === id
    )
    const entryToDelete = creatureEntries[index]
    deleteCreatureEntry(entryToDelete)
  }
  function onEdit(id) {
    const creatureToEdit = creatureEntries.find(
      (creatureEntry) => creatureEntry._id === id
    )
    setEditCreature(creatureToEdit)
    editCreatureEntry(creatureToEdit)
  }
  function toggleEnemyPreview() {
    setIsEnemyPreviewVisible(!isEnemyPreviewVisible)
  }
  function togglePlayerPreview() {
    setIsPlayerPreviewVisible(!isPlayerPreviewVisible)
  }
}

const PreviewContainerStyled = styled(animated.div)`
  display: block;
  z-index: 200;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &::before {
    height: 0;
    background: linear-gradient(#0002, #0000);
  }
  &::after {
    height: auto;
    bottom: 0;
    background: linear-gradient(#0000, #0001);
  }
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
