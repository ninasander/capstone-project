import { useEffect, useState } from 'react'
import { getCreatureEntries, postCreatureEntry } from '../utils/services'

export default function useCreatureEntries() {
  //useJournals
  const [creatureEntries, setCreatureEntries] = useState([]) // const [entries, setEntries] = useState([])

  useEffect(() => {
    getCreatureEntries().then(setCreatureEntries) //getJournals().then(setEntries)
  }, [])

  const addCreatureEntry = (entry) => {
    //addEntry = (entry)
    postCreatureEntry(entry) //postJournal(entry)
      .then(
        (
          newCreatureEntry //.then((newEntry)
        ) => setCreatureEntries([newCreatureEntry, ...creatureEntries]) //setEntries([newEntry, ...entries]))
      )
  }

  return { creatureEntries, addCreatureEntry }
}
