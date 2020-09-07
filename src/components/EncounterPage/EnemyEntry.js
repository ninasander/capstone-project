import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import HPCalculator from './HPCalculator'

EnemyEntry.propTypes = {
  enemyName: PropTypes.string.isRequired,
  armorClass: PropTypes.string.isRequired,
  HP: PropTypes.string.isRequired,
}

export default function EnemyEntry({ enemyName, armorClass, HP }) {
  const [currentHP, setCurrentHP] = useState(HP)

  return (
    <EnemyEntryStyled>
      <h2>{enemyName}</h2>
      <p>
        HP: {currentHP}/{HP}
      </p>
      <HPCalculator currentHP={currentHP} HP={HP} setCurrentHP={setCurrentHP} />
      <p>AC: {armorClass}</p>
    </EnemyEntryStyled>
  )
}

const EnemyEntryStyled = styled.div`
  margin: 20px;
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  background: hsla(208, 40%, 28%, 1);
  background: linear-gradient(
      180deg,
      hsla(208, 40%, 28%, 1) 0%,
      hsla(208, 40%, 23%, 1) 51%,
      hsla(207, 38%, 18%, 1) 100%
    )
    fixed no-repeat;
  color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 6px rgba(8, 15, 21, 0.3);

  h2 {
    grid-column: span 3;
    margin: 0;
    font-size: 140%;
  }
  p {
    margin: 0;
  }
`
