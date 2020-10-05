import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import DisplayPlayerAndEnemy from './DisplayPlayerAndEnemy'

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
      <DisplayPlayerAndEnemy
        initiative={playerInitiative}
        name={playerName}
        armorClass={playerArmorClass}
      />
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
  /* h1 {
    align-self: center;
    margin: 0;
    font-size: 1.8rem;
  }

  p {
    align-self: center;
    margin: 0;
  } */
`
// const InitiativeStyled = styled.p`
//   justify-self: center;
//   padding: 5px;
//   background-image: url(${d20Icon});
//   background-position: center;
//   background-size: 30px;
//   background-repeat: no-repeat;
// `

// const ACStyled = styled.p`
//   text-align: center;
//   padding: 10px 0;
//   background-image: url(${shieldIcon});
//   background-size: 37px;
//   background-repeat: no-repeat;
//   background-position: center;
//   p {
//     margin: 0;
//   }
// `
