import React from 'react'
import { useForm } from 'react-hook-form'

export default function CreatePlayer({ onAddCreature }) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (playerEntry, event) => {
    event.target.reset()
    onAddCreature(playerEntry)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add your players' stats:</h1>
      <label>Player name:</label>
      <input
        type="text"
        placeholder="Player name"
        name="playerName"
        ref={register({ required: true, min: 1, maxLength: 60 })}
      />
      <label>AC:</label>
      <input
        type="number"
        placeholder="Armor Class"
        name="armorClass"
        ref={register({
          required: true,
          min: 0,
          maxLength: 2,
          pattern: /^[0-9]+$/i,
        })}
      />
      <label>Initiative:</label>
      <input
        type="number"
        placeholder="Initiative"
        name="initiative"
        ref={register({
          required: true,
          min: 0,
          maxLength: 2,
          pattern: /^[0-9]+$/i,
        })}
      />
      <button type="submit">Add Player</button>
    </form>
  )
}
