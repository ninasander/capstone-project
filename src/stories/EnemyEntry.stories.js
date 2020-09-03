import React from 'react'
import EnemyEntry from '../EncounterPage/EnemyEntry'

export default {
  title: 'Enemy Entry',
  component: EnemyEntry,
}

export const Enemy = () => (
  <EnemyEntry enemy={'Enemy 1'} maxHP={50} ac={17} HP={50} />
)
