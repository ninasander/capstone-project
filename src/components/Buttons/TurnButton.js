import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

TurnButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  arrowSymbol: PropTypes.string.isRequired,
}

export default function TurnButton({ upperText, lowerText, onClick }) {
  return (
    <ButtonStyled onClick={onClick}>
      <p>{upperText}</p>
      <p>{lowerText}</p>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  margin: 10px;
  padding: 5px;
  width: 100px;
  height: 60px;
  font-size: 100%;
  font-family: 'Gentium Book Basic', serif;
  display: block;
  background: linear-gradient(
      180deg,
      hsla(208, 40%, 28%, 1) 0%,
      hsla(208, 40%, 23%, 1) 51%,
      hsla(207, 38%, 18%, 1) 100%
    )
    fixed no-repeat;
  color: white;
  border-style: none;
  border-radius: 5px;
  box-shadow: 4px 4px 6px rgba(8, 15, 21, 0.3);
  p {
    margin: 0;
  }
`
