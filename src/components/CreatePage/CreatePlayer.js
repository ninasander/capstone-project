import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import PageButton from '../Buttons/PageButton'

export default function CreatePlayer({ addCreatureEntry }) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (playerEntry, event) => {
    event.target.reset()
    addCreatureEntry(playerEntry)
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <h1>Add your players' stats:</h1>
      <FormContainerStyled>
        <section>
          <label>Player name:</label>
          <input
            type="text"
            placeholder="Ser Hero Fancypants"
            name="playerName"
            ref={register({ required: true, min: 1, maxLength: 60 })}
          />
        </section>
        <section>
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
        </section>
        <label>Initiative:</label>
        <input
          type="number"
          placeholder="(D20 + Dex)"
          name="initiative"
          ref={register({
            required: true,
            min: 0,
            maxLength: 2,
            pattern: /^[0-9]+$/i,
          })}
        />
        <PageButton type="submit" buttonText="Add Player" />
      </FormContainerStyled>
    </FormStyled>
  )
}
const FormStyled = styled.form`
  h1 {
    font-size: 120%;
  }
  section {
    margin-bottom: 10px;
  }
  label {
    margin-right: 10px;
    font-size: 110%;
  }
  input {
    font-size: 65%;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[name='playerName'] {
      width: 175px;
    }
    &[name='armorClass'] {
      width: 80px;
      margin-right: 10px;
      -moz-appearance: textfield;
    }
    &[name='initiative'] {
      width: 90px;
      margin-right: 10px;
      -moz-appearance: textfield;
    }
  }
`
const FormContainerStyled = styled.div`
  padding: 20px;
  background: hsla(208, 40%, 28%, 0.5);
  border-radius: 5px;
`
