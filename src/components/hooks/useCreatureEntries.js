import { useEffect, useState } from 'react'
import {
  getCreatureEntries,
  postCreatureEntry,
  removeCreatureEntry,
} from '../services/services'

export default function useCreatureEntries() {
  const [creatureEntries, setCreatureEntries] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getCreatureEntries().then(setCreatureEntries)
  }, [])

  const addCreatureEntry = (creatureEntry) => {
    postCreatureEntry(creatureEntry)
      .then((newCreatureEntry) =>
        setCreatureEntries([newCreatureEntry, ...creatureEntries])
      )
      .catch(setError)
  }

  const deleteCreatureEntry = (entryToDelete) => {
    removeCreatureEntry(entryToDelete)
    setCreatureEntries(
      creatureEntries.filter((creatureEntry) => {
        return entryToDelete._id !== creatureEntry._id
      })
    )
  }

  // const editCreatureEntry

  return { creatureEntries, addCreatureEntry, deleteCreatureEntry, error }
}
