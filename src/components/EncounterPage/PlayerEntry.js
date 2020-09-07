import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PlayerEntry.propTypes = {
  playerName: PropTypes.string.isRequired,
  armorClass: PropTypes.string.isRequired,
}

export default function PlayerEntry({ playerName, armorClass }) {
  return (
    <PlayerEntryStyled>
      <h1>{playerName}</h1>
      <p>AC: {armorClass}</p>
    </PlayerEntryStyled>
  )
}

const PlayerEntryStyled = styled.div`
  margin: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    margin: 0;
    font-size: 140%;
  }
  p {
    align-self: center;
    margin: 0;
  }
`
