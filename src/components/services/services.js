import { loadLocally, saveLocally } from '../lib/localStorage'
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

export function removeCreatureEntry(creatureToDelete) {
  return getCreatureEntries()
    .then((creatureEntries) => {
      const index = creatureEntries.findIndex(
        (creatureEntry) => creatureEntry._id === creatureToDelete._id
      )
      return [
        ...creatureEntries.slice(0, index),
        ...creatureEntries.slice(index + 1),
      ]
    })
    .then((creatureEntries) => saveLocally('CreatureEntries', creatureEntries))
    .then(() => creatureToDelete)
}

export function updateCreatureEntry(creatureToEdit) {
  return getCreatureEntries()
    .then((creatureEntries) => {
      const index = creatureEntries.findIndex(
        (creatureEntry) => creatureEntry._id === creatureToEdit._id
      )
      return [
        ...creatureEntries.slice(0, index),
        creatureToEdit,
        ...creatureEntries.slice(index + 1),
      ]
    })
    .then((creatureEntries) => saveLocally('CreatureEntries', creatureEntries))
    .then(() => creatureToEdit)
}
