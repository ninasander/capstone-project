import React from 'react'
import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'
import shieldIcon from '../../assets/shield.svg'
import d20Icon from '../../assets/d20.svg'

export default function DisplayPlayerAndEnemy({
  width,
  initiative,
  name,
  armorClass,
}) {
  return (
    <DisplayNameStyled>
      <InitiativeStyled>{initiative}</InitiativeStyled>
      <h2>{name}</h2>
      <ACStyled width={width}>{armorClass}</ACStyled>
    </DisplayNameStyled>
  )
}

const DisplayNameStyled = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;

  h2 {
    margin: 0 0 0 5px;
    font-size: 1.8rem;
    word-break: break-word;
  }
`
const InitiativeStyled = styled.p`
  text-align: center;
  align-self: center;
  width: 40px;
  margin: 0;
  padding: 7px 0;
  background-image: url(${d20Icon});
  background-position: center;
  background-size: 30px;
  background-repeat: no-repeat;
`

const ACStyled = styled.p`
  width: 50px;
  margin: 0;
  margin-left: auto;
  text-align: center;
  align-self: center;
  padding: 10px 0;
  background-image: url(${shieldIcon});
  background-size: ${(props) => props.width || 37}px;
  background-repeat: no-repeat;
  background-position: center;
`
