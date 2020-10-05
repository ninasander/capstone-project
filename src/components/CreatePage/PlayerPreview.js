import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import DisplayPlayerAndEnemy from '../EncounterPage/DisplayPlayerAndEnemy'

PlayerPreview.propTypes = {
  creatureEntry: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}

export default function PlayerPreview({
  handleDelete,
  handleEdit,
  creatureEntry,
}) {
  return (
    <>
      <PlayerEntryStyled>
        <DisplayPlayerAndEnemy
          initiative={creatureEntry.playerInitiative}
          name={creatureEntry.playerName}
          armorClass={creatureEntry.playerArmorClass}
          width="28"
        />
        <ButtonContainer>
          <EditButtonStyled onClick={handleEditClick}>Edit</EditButtonStyled>
          <DeleteButtonStyled
            onClick={handleDeleteClick}
            id={creatureEntry._id}
          >
            Delete
          </DeleteButtonStyled>
        </ButtonContainer>
      </PlayerEntryStyled>
    </>
  )
  function handleDeleteClick() {
    handleDelete(creatureEntry._id)
  }
  function handleEditClick() {
    handleEdit(creatureEntry._id)
  }
}

const PlayerEntryStyled = styled.div`
  margin: 20px;
  padding: 20px;
  display: grid;
  grid-gap: 5px 20px;
  justify-content: space-between;
  grid-template-columns: 1fr 2fr 2fr;
  background: hsla(208, 40%, 28%, 1);
  background: linear-gradient(
      180deg,
      hsla(208, 40%, 28%, 1) 0%,
      hsla(208, 40%, 23%, 1) 51%,
      hsla(207, 38%, 18%, 1) 100%
    )
    fixed no-repeat;
  color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 6px rgba(8, 15, 21, 0.3);

  h2 {
    font-size: 1.5rem;
  }
`
const ButtonContainer = styled.div`
  grid-column: span 3;
  justify-self: center;
`

const DeleteButtonStyled = styled.button`
  color: var(--dark-red);
  background: var(--light-red);
  border-style: none;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 5px 0 0 5px;
  width: fit-content;
`
const EditButtonStyled = styled.button`
  color: var(--dark-green);
  background: var(--light-green);
  border-style: none;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 5px 5px 0 0;
  width: fit-content;
`
