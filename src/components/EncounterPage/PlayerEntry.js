import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PlayerEntry.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerArmorClass: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  playerInitiative: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
}

export default function PlayerEntry({
  playerName,
  playerArmorClass,
  playerInitiative,
  index,
  activeIndex,
}) {
  return (
    <PlayerEntryStyled active={index === activeIndex}>
      <h1>{playerInitiative}</h1>
      <h2>{playerName}</h2>
      <p>AC: {playerArmorClass}</p>
    </PlayerEntryStyled>
  )
}

const PlayerEntryStyled = styled.div`
  margin: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: linear-gradient(
      180deg,
      hsla(208, 40%, 28%, 1) 0%,
      hsla(208, 40%, 23%, 1) 51%,
      hsla(207, 38%, 18%, 1) 100%
    )
    fixed no-repeat;
  color: white;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.active ? '0 0 15px green' : '4px 4px 6px rgba(8, 15, 21, 0.3)'};
  border: ${(props) => props.active && '2px solid green'};
  h1 {
    grid-row: span 2;
    align-self: center;
  }
  h2 {
    margin: 0;
    font-size: 140%;
  }
  p {
    align-self: center;
    margin: 0;
  }
`
