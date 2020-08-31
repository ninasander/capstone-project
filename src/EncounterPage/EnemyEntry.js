import React from 'react'

export default function EnemyEntry({ enemy, ac, maxHP }) {
  return (
    <div>
      <h2>{enemy}</h2>
      <p>HP: {maxHP}</p>
      <p>AC: {ac}</p>
    </div>
  )
}
