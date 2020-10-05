import React, { useState } from 'react'
import CalculatorButton from './CalculatorButton'
import styled from 'styled-components'

export default function HPCalculator({ setCurrentHP, currentHP, HP }) {
  const [hpInputValue, setHpInputValue] = useState('')
  return (
    <CounterStyled>
      <CalculatorButton onClick={addToHP} operator="Healing" />
      <InputStyled
        min={0}
        value={hpInputValue}
        onChange={(event) => handleChange(event)}
        name="HPInput"
        aria-label="HPInput"
        type="number"
        step="1"
      />

      <CalculatorButton onClick={subtractFromHP} operator="Damage" />
    </CounterStyled>
  )
  function handleChange(event) {
    const hpInputValue = event.target.value
    const regexp = new RegExp('^[0-9]+$')
    if (regexp.test(hpInputValue) || hpInputValue === '') {
      setHpInputValue(hpInputValue)
    }
  }

  function addToHP() {
    const calculatedHP = currentHP + Number(hpInputValue)
    setCurrentHP(calculatedHP > HP ? HP : calculatedHP)
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
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
`

const InputStyled = styled.input`
  width: 55px;
  height: 30px;
  text-align: center;
  position: relative;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`
