import React from 'react'
import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'

// EnemyPreview.propTypes = {
//   enemyName: PropTypes.string.isRequired,
//   armorClass: PropTypes.number.isRequired,
//   HP: PropTypes.number.isRequired,
//   initiative: PropTypes.number.isRequired,
// }

export default function EnemyPreview({
  enemyName,
  armorClass,
  HP,
  initiative,
  creatureEntry,
  handleDelete,
  onEdit,
}) {
  return (
    <>
      <DeleteButtonStyled onClick={handleDeleteClick} id={creatureEntry._id}>
        ✕
      </DeleteButtonStyled>
      <EnemyEntryStyled>
        <h1>{initiative}</h1>
        <h2>{enemyName}</h2>
        <p>
          HP: {HP}/{HP}
        </p>
        <p>AC: {armorClass}</p>
        <EditButtonStyled onClick={onEdit}>Edit</EditButtonStyled>
      </EnemyEntryStyled>
    </>
  )

  function handleDeleteClick() {
    handleDelete(creatureEntry._id)
  }
}

const DeleteButtonStyled = styled.button`
  color: red;
  margin: 0;
  padding: 0;
  background: none;
  border-style: none;
  font-size: 110%;
  position: relative;
  left: 285px;
  top: 35px;
  z-index: 100;
`
const EditButtonStyled = styled.button`
  color: green;
  background: lightgreen;
  border-style: none;
  grid-column: span 3;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 0;
  width: fit-content;
  justify-self: center;
`

const EnemyEntryStyled = styled.div`
  font-size: 80%;
  margin: 0 20px;
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
  h1 {
    grid-row: span 2;
    align-self: center;
  }
  h2 {
    grid-column: span 2;
    margin: 0;
    font-size: 140%;
    word-break: break-word;
  }
  p {
    margin: 0;
  }
`
