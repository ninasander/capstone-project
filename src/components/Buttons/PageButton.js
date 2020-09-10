import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PageButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
}

export default function PageButton({ buttonText, onClick }) {
  return <ButtonStyled onClick={onClick}>{buttonText}</ButtonStyled>
}

const ButtonStyled = styled.button`
  margin: 20px auto 0 auto;
  padding: 10px 20px;
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
`
