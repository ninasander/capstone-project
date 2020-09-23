import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import shieldIcon from '../../assets/shield.svg'
import d20Icon from '../../assets/d20.svg'

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
      <p>{playerInitiative}</p>
      <h2>{playerName}</h2>
      <ACStyled>{playerArmorClass}</ACStyled>
    </PlayerEntryStyled>
  )
}

const PlayerEntryStyled = styled.div`
  margin: 20px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
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
    props.active
      ? '0 0 15px var(--highlight-blue)'
      : '4px 4px 6px rgba(8, 15, 21, 0.3)'};
  border: ${(props) => props.active && '2px solid var(--highlight-blue)'};
  h1 {
    align-self: center;
    margin: 0;
    font-size: 18px;
    background-image: url(${d20Icon});
    background-size: 47px;
    background-repeat: no-repeat;
  }
  h2 {
    margin: 0;
    font-size: 1.8rem;
    align-self: center;
  }
  p {
    align-self: center;
    margin: 0;
  }
`
const ACStyled = styled.p`
  text-align: center;
  padding: 10px 0;
  background-image: url(${shieldIcon});
  background-size: 37px;
  background-repeat: no-repeat;
  background-position: center;
  p {
    margin: 0;
  }
`
