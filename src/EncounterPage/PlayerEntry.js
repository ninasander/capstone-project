import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerEntry({ player, ac }) {
  return (
    <PlayerEntryStyled>
      <h2>{player}</h2>
      <p>AC: {ac}</p>
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
  h2,
  p {
    align-self: center;
    margin: 0;
  }
`
