import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import PageButton from '../Buttons/PageButton'

export default function CreatePlayer({
  addCreatureEntry,
  editCreatureEntry,
  editCreature,
}) {
  const { register, handleSubmit, errors, setValue } = useForm()

  const onSubmit = (creatureEntry, event) => {
    event.target.reset()
    if (editCreature) {
      editCreatureEntry({ ...creatureEntry, _id: editCreature._id })
    } else {
      addCreatureEntry(creatureEntry)
    }
  }

  useEffect(() => {
    if (editCreature) {
      setValue('playerName', editCreature.playerName)
      setValue('playerArmorClass', editCreature.playerArmorClass)
      setValue('playerInitiative', editCreature.playerInitiative)
    }
  }, [editCreature, setValue])

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
            ref={register({
              required: true,
              min: 1,
              maxLength: 60,
              pattern: /.*\S.*/,
            })}
          />
          {errors.playerName && (
            <ErrorInfoStyled>
              Please enter a name (At least 1 character)
            </ErrorInfoStyled>
          )}
        </section>
        <section>
          <label>AC:</label>
          <input
            type="number"
            placeholder="Armor Class"
            name="playerArmorClass"
            ref={register({
              required: true,
              min: 0,
              maxLength: 2,
              pattern: /^[0-9]+$/i,
            })}
          />
          {errors.armorClass && (
            <ErrorInfoStyled>
              Please enter a positive number (Max. 2 digits)
            </ErrorInfoStyled>
          )}
        </section>
        <label>Initiative:</label>
        <input
          type="number"
          placeholder="(D20 + Dex)"
          name="playerInitiative"
          ref={register({
            required: true,
            min: 0,
            maxLength: 2,
            pattern: /^[0-9]+$/i,
          })}
        />
        {errors.initiative && (
          <ErrorInfoStyled>
            Please enter a positive number (Max. 2 digits)
          </ErrorInfoStyled>
        )}
        <PageButton type="submit" buttonText="Add Player" />
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
    &[name='playerName'] {
      width: 175px;
    }
    &[name='playerArmorClass'] {
      width: 80px;
      margin-right: 10px;
      -moz-appearance: textfield;
    }
    &[name='playerInitiative'] {
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
const ErrorInfoStyled = styled.p`
  font-size: 75%;
`
