import React from 'react'
import { useForm } from 'react-hook-form'

export default function CreateMonster({ onAddCreature }) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (enemyEntry, event) => {
    //const onSubmit = (journalEntry, event)
    event.target.reset()
    onAddCreature(enemyEntry) // onSave(journalEntry)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add your enemy creatures:</h1>
      <label htmlFor="enemyName">Enemy name:</label>
      <input
        type="text"
        placeholder="Enemy name"
        name="enemyName"
        ref={register({ required: true, min: 1, maxLength: 60 })}
      />
      <label htmlFor="HP">HP:</label>
      <input
        type="number"
        placeholder="HP"
        name="HP"
        ref={register({
          required: true,
          min: 1,
          maxLength: 100,
          pattern: /^[0-9]+$/i,
        })}
      />
      <label htmlFor="armorClass">AC:</label>
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
      <label htmlFor="initiative">Initiative:</label>
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

      <button type="submit">Add enemy</button>
    </form>
  )
}
