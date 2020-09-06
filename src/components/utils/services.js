import { loadLocally, saveLocally } from './localStorage'
import { v4 as uuid } from 'uuid'

export function getCreatureEntries() {
  const creatureEntries = [
    { key: 123, enemyName: 'test', hp: 289, ac: 19, initiative: 29 },
  ]
  console.log(creatureEntries)
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
