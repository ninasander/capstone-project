import { useEffect, useState } from 'react'
import { loadLocally, saveLocally } from '../lib/localStorage'
import { v4 as uuid } from 'uuid'

export default function useCreatureEntries() {
  const [creatureEntries, setCreatureEntries] = useState(
    loadLocally('creatureEntries') ?? []
  )

  useEffect(() => {
    saveLocally('creatureEntries', creatureEntries)
  }, [creatureEntries])

  const addCreatureEntry = (creatureEntry) => {
    const newCreatureEntry = { ...creatureEntry, _id: uuid() }
    setCreatureEntries([newCreatureEntry, ...creatureEntries])
  }

  const deleteCreatureEntry = (entryToDelete) => {
    setCreatureEntries(
      creatureEntries.filter((creatureEntry) => {
        return entryToDelete._id !== creatureEntry._id
      })
    )
  }

  const editCreatureEntry = (creatureToEdit) => {
    const index = creatureEntries.findIndex(
      (creatureEntry) => creatureEntry._id === creatureToEdit._id
    )
    setCreatureEntries([
      ...creatureEntries.slice(0, index),
      creatureToEdit,
      ...creatureEntries.slice(index + 1),
    ])
  }

  return {
    creatureEntries,
    addCreatureEntry,
    deleteCreatureEntry,
    editCreatureEntry,
  }
}
