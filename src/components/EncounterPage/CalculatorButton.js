import React from 'react'
import styled from 'styled-components/macro'

export default function CalculatorButton({ operator, onClick }) {
  return (
    <ButtonStyled operator={operator} type="button" onClick={onClick}>
      {operator}
    </ButtonStyled>
  )
}

const operatorBgColors = {
  Healing: 'var(--light-green)',
  Damage: 'var(--light-red)',
}

const operatorColors = {
  Healing: 'var(--dark-green)',
  Damage: 'var(--dark-red)',
}

const ButtonStyled = styled.button`
  width: 65px;
  height: 30px;
  font-size: 80%;
  border-style: none;
  text-align: center;
  border-radius: 5px;
  padding: 2px 4px;
  background: ${(props) => operatorBgColors[props.operator]};
  color: ${(props) => operatorColors[props.operator]};
  border: 1px solid ${(props) => operatorColors[props.operator]};
`
