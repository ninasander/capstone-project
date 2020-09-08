import React from 'react'
import { useForm } from 'react-hook-form'
import PageButton from '../Buttons/PageButton'
import styled from 'styled-components/macro'

export default function CreateMonster({ addCreatureEntry }) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (enemyEntry, event) => {
    event.target.reset()
    addCreatureEntry(enemyEntry)
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <h1>Add your enemy creatures:</h1>
      <FormContainerStyled>
        <section>
          <label htmlFor="enemyName">Enemy name:</label>
          <input
            type="text"
            placeholder="Big Bad Evil Guy"
            name="enemyName"
            ref={register({ required: true, min: 1, maxLength: 60 })}
          />
        </section>
        <section>
          <label htmlFor="HP">HP:</label>
          <input
            type="number"
            placeholder="Max. Hit Points"
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
        </section>
        <label htmlFor="initiative">Initiative:</label>
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

        <PageButton type="submit" buttonText="Add Enemy" />
      </FormContainerStyled>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  color: white;
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
    &[name='enemyName'] {
      width: 170px;
    }
    &[name='HP'] {
      width: 100px;
      margin-right: 25px;
      -moz-appearance: textfield;
    }
    &[name='armorClass'] {
      width: 90px;
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
