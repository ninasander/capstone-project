import { loadLocally, saveLocally } from './localStorage'
import { v4 as uuid } from 'uuid'

export function getCreatureEntries() {
  const creatureEntries = []

  return loadLocally('CreatureEntries', creatureEntries).catch(() => {
    return creatureEntries
  })
}

export function postCreatureEntry(creatureEntry) {
  const newCreatureEntry = { ...creatureEntry, _id: uuid() }
  return getCreatureEntries()
    .then((creatureEntries) => [newCreatureEntry, ...creatureEntries])
    .then((creatureEntries) => saveLocally('CreatureEntries', creatureEntries))
    .then(() => newCreatureEntry)
}

// export function removeCreatureEntry() {
//   return getCreatureEntries()
//     .then((creatureEntries) =>
//       removeLocally('CreatureEntries', creatureEntries)
//     )
//     .then((creatureEntries) => saveLocally('CreatureEntries', creatureEntries))
// }
