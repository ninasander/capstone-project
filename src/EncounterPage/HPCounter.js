import React from 'react'
import CounterButton from './CounterButton'
import styled from 'styled-components'

export default function HPCounter() {
  return (
    <>
      <InputStyled name="HPInput" type="number" />
      <CounterButton onClick={calculateHP} operator="+" />
      <CounterButton onClick={calculateHP} operator="-" />
    </>
  )

  function calculateHP({ currentHP, setCurrentHP }) {
    const inputNumber = InputStyled.value
    setCurrentHP(currentHP + inputNumber)
  }
}

const InputStyled = styled.input`
  width: 50px;
`
