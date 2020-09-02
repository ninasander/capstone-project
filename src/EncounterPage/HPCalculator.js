import React, { useState } from 'react'
import CalculatorButton from './CalculatorButton'
import styled from 'styled-components'

export default function HPCalculator({ setCurrentHP, currentHP, maxHP }) {
  const [hpInputValue, setHpInputValue] = useState('')
  return (
    <CounterStyled>
      <CalculatorButton onClick={addToHP} operator="+" />
      <InputStyled
        min={0}
        value={hpInputValue}
        onChange={handleChange}
        name="HPInput"
        type="number"
      />

      <CalculatorButton onClick={subtractFromHP} operator="-" />
    </CounterStyled>
  )
  function handleChange(event, onChange) {
    const hpInputValue = event.target.value
    const regexp = new RegExp('^[0-9]+$')
    if (regexp.test(hpInputValue)) {
      setHpInputValue(hpInputValue)
      onChange(hpInputValue)
    }
  }

  function addToHP() {
    const calculatedHP = currentHP + Number(hpInputValue)
    setCurrentHP(calculatedHP > maxHP ? maxHP : calculatedHP)
    setHpInputValue('')
  }
  function subtractFromHP() {
    const calculatedHP = currentHP - Number(hpInputValue)
    setCurrentHP(calculatedHP < 0 ? 0 : calculatedHP)
    setHpInputValue('')
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
