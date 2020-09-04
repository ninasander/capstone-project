import React from 'react'
import { useForm } from 'react-hook-form'

export default function CreateMonster() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (enemyEntry) => console.log(enemyEntry)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add your enemy creatures:</h1>
      <label htmlFor="Enemy name">Enemy name:</label>
      <input
        type="text"
        placeholder="Enemy name"
        name="Enemy name"
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
      <label htmlFor="Armor Class">AC:</label>
      <input
        type="number"
        placeholder="Armor Class"
        name="Armor Class"
        ref={register({
          required: true,
          min: 0,
          maxLength: 2,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <label htmlFor="Initiative">Initiative:</label>
      <input
        type="number"
        placeholder="Initiative"
        name="Initiative"
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
