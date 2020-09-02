import React, { useState } from 'react'
import CounterButton from './CounterButton'
import styled from 'styled-components'

export default function HPCalculator({ setCurrentHP, currentHP, maxHP }) {
  const [input, setInput] = useState('')
  return (
    <CounterStyled>
      <CounterButton onClick={addToHP} operator="+" />
      <InputStyled
        min={0}
        value={input}
        onChange={(event) => setInput(event.target.value)}
        name="HPInput"
        type="number"
      />

      <CounterButton onClick={subtractFromHP} operator="-" />
    </CounterStyled>
  )

  function addToHP() {
    const calculatedHP = currentHP + Number(input)
    setCurrentHP(calculatedHP > maxHP ? maxHP : calculatedHP)
    setInput('')
  }
  function subtractFromHP() {
    const calculatedHP = currentHP - Number(input)
    setCurrentHP(calculatedHP < 0 ? 0 : calculatedHP)
    setInput('')
  }
}

const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputStyled = styled.input`
  width: 50px;
  position: relative;
`
