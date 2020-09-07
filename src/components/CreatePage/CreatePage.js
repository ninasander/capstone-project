import React from 'react'
import CreateMonster from './CreateMonster'
import CreatePlayer from './CreatePlayer'

export default function CreatePage({ creatureEntries, addCreatureEntry }) {
  const hasEnemy =
    creatureEntries.filter((creatureEntry) => creatureEntry.enemyName)
      .length === 0
      ? false
      : true
  const hasPlayer =
    creatureEntries.filter((creatureEntry) => creatureEntry.playerName)
      .length === 0
      ? false
      : true

  console.log(hasPlayer)

  return (
    <>
      <CreateMonster addCreatureEntry={addCreatureEntry} />
      <CreatePlayer addCreatureEntry={addCreatureEntry} />
      {hasEnemy === true && hasPlayer === true ? (
        <a href="/encounter">
          <button>Start Encounter</button>
        </a>
      ) : null}
    </>
  )
}
