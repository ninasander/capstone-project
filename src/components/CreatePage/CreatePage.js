import React from 'react'
import { useForm } from 'react-hook-form'

export default function CreatePage() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enemy name"
        name="Enemy name"
        ref={register({ required: true, min: 1, maxLength: 60 })}
      />
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

      <input type="submit" />
    </form>
  )
}
