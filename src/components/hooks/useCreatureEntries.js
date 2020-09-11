import { useEffect, useState } from 'react'
import { getCreatureEntries, postCreatureEntry } from '../services/services'

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

  const deleteCreatureEntry = (id) => {
    // removeCreatureEntry(id)
    setCreatureEntries(
      creatureEntries.filter((creatureEntry) => {
        return id !== creatureEntry._id
      })
    )
  }

  return { creatureEntries, addCreatureEntry, deleteCreatureEntry, error }
}
