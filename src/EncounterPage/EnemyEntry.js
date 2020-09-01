import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

EnemyEntry.propTypes = {
  enemy: PropTypes.string.isRequired,
  ac: PropTypes.number.isRequired,
  maxHP: PropTypes.number.isRequired,
}

export default function EnemyEntry({ enemy, ac, maxHP }) {
  return (
    <EnemyEntryStyled>
      <h1>{enemy}</h1>
      <p>HP: {maxHP}</p>
      <p>AC: {ac}</p>
    </EnemyEntryStyled>
  )
}

const EnemyEntryStyled = styled.div`
  margin: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    grid-column: span 2;
    margin: 0;
    font-size: 140%;
  }
  p {
    margin: 20px 0 0;
  }
`
