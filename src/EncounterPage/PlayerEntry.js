import React from 'react'

export default function PlayerEntry({ player, ac }) {
  return (
    <div>
      <h2>{player}</h2>
      <p>AC: {ac}</p>
    </div>
  )
}
