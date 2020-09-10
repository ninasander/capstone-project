import { useEffect, useState } from 'react'
import { getCreatureEntries, postCreatureEntry } from '../utils/services'

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

  // const deleteCreatureEntry = (creatureEntry) => {
  //   removeCreatureEntry(creatureEntry)
  //     .then((newCreatureEntry) =>
  //       setCreatureEntries([newCreatureEntry, ...creatureEntries])
  //     )
  //     .catch(setError)
  // }

  return { creatureEntries, addCreatureEntry, error }
}
