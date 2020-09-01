import React from 'react'
import styled from 'styled-components/macro'

export default function CounterButton({ operator, onClick }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {operator}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  font-size: 100%;
  border-style: none;
  width: fit-content;
  height: fit-content;
  text-align: center;
`
