import React, { useState } from 'react'
import CounterButton from './CounterButton'
import styled from 'styled-components'

export default function HPCounter({ setCurrentHP, currentHP }) {
  const [input, setInput] = useState('')
  return (
    <>
      <InputStyled
        value={input}
        onChange={(event) => setInput(event.target.value)}
        name="HPInput"
        type="number"
      />
      <CounterButton onClick={addToHP} operator="+" />
      <CounterButton onClick={subtractFromHP} operator="-" />
    </>
  )

  function addToHP() {
    setCurrentHP(currentHP + Number(input))
    setInput('')
  }
  function subtractFromHP() {
    setCurrentHP(currentHP - Number(input))
    setInput('')
  }
}

const InputStyled = styled.input`
  width: 50px;
`
