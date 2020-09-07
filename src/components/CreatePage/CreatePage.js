import React from 'react'
import CreateMonster from './CreateMonster'
import CreatePlayer from './CreatePlayer'
import useCreatureForm from './useCreatureForm'

export default function CreatePage({ creatureEntries, addCreatureEntry }) {
  // CreatePage ( entries, addEntry)
  const { onAddCreature } = useCreatureForm(addCreatureEntry) //useJournalForm(addEntry)
  console.log(creatureEntries)
  const hasEnemy = creatureEntries.map(
    (creatureEntry) => creatureEntry.enemyName
  )
  console.log(hasEnemy.length)
  const hasPlayer = creatureEntries.map(
    (creatureEntry) => creatureEntry.playerName
  )
  console.log(hasPlayer.length)

  return (
    <>
      <CreateMonster onAddCreature={onAddCreature} />
      <CreatePlayer onAddCreature={onAddCreature} />
      {hasEnemy !== [undefined] && hasPlayer !== [undefined] ? (
        <a href="/encounter">
          <button>Start Encounter</button>
        </a>
      ) : null}
    </>
  )
}
