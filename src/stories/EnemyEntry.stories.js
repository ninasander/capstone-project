import React from 'react'
import EnemyEntry from '../components/EncounterPage/EnemyEntry'

export default {
  title: 'Enemy Entry',
  component: EnemyEntry,
}

export const Enemy = () => (
  <EnemyEntry enemyName={'Enemy 1'} HP={50} armorClass={17} initiative={20} />
)
