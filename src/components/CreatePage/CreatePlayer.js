import React from 'react'
import { useForm } from 'react-hook-form'

export default function CreatePlayer() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add your players' stats:</h1>
      <label>Enemy name:</label>
      <input
        type="text"
        placeholder="Player name"
        name="Player name"
        ref={register({ required: true, min: 1, maxLength: 60 })}
      />
      <label>AC:</label>
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
      <label>Initiative:</label>
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
      <button type="submit">Add Player</button>
    </form>
  )
}
