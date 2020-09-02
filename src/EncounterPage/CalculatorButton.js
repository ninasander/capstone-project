import React from 'react'
import styled from 'styled-components/macro'

export default function CalculatorButton({ operator, onClick }) {
  return (
    <ButtonStyled operator={operator} type="button" onClick={onClick}>
      {operator}
    </ButtonStyled>
  )
}

const operatorColors = {
  '+': 'green',
  '-': 'red',
}

const ButtonStyled = styled.button`
  font-size: 80%;
  border-style: none;
  width: fit-content;
  height: fit-content;
  text-align: center;
  background: ${(props) => operatorColors[props.operator]};
`
