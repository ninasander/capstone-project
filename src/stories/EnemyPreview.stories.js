import React from 'react'
import EnemyPreview from '../components/CreatePage/EnemyPreview'

export default {
  title: 'Enemy Preview',
  component: EnemyPreview,
}
const creatureEntry = {
  enemyName: 'test enemy 1',
  armorClass: 17,
  initiative: 20,
  HP: 50,
  _id: 5,
}

export const Enemy = () => (
  <EnemyPreview
    creatureEntry={creatureEntry}
    enemyName={creatureEntry.enemyName}
    armorClass={creatureEntry.armorClass}
    initiative={creatureEntry.initiative}
    HP={creatureEntry.HP}
  />
)
