import React from 'react'
import CreateMonster from './CreateMonster'
import CreatePlayer from './CreatePlayer'
import useCreatureForm from './useCreatureForm'

export default function CreatePage({ creatureEntries, addCreatureEntry }) {
  // CreatePage ( entries, addEntry)
  const { onAddCreature } = useCreatureForm(addCreatureEntry) //useJournalForm(addEntry)
  console.log(creatureEntries)
  return (
    <>
      <CreateMonster onAddCreature={onAddCreature} />
      <CreatePlayer />
    </>
  )
}
