import React from 'react'
import CalculatorButton from '../components/EncounterPage/CalculatorButton'

export default {
  title: 'Calculator Button',
  component: CalculatorButton,
}

export const AddButton = () => <CalculatorButton operator="+" />
export const SubtractButton = () => <CalculatorButton operator="-" />
