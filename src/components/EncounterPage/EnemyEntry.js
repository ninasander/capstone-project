import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import HPCalculator from './HPCalculator'
import DisplayPlayerAndEnemy from './DisplayPlayerAndEnemy'
import HPBar from './HPBar'

EnemyEntry.propTypes = {
  enemyName: PropTypes.string.isRequired,
  armorClass: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  HP: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  initiative: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
}

export default function EnemyEntry({
  enemyName,
  armorClass,
  HP,
  initiative,
  index,
  activeIndex,
}) {
  const [currentHP, setCurrentHP] = useState(HP)

  return (
    <EnemyEntryStyled active={index === activeIndex}>
      <DisplayPlayerAndEnemy
        initiative={initiative}
        name={enemyName}
        armorClass={armorClass}
      />
      <HPBar currentHP={currentHP} HP={HP} />
      <HPCalculatorContainer>
        <HPCalculator
          currentHP={currentHP}
          HP={HP}
          setCurrentHP={setCurrentHP}
        />
      </HPCalculatorContainer>
    </EnemyEntryStyled>
  )
}

const EnemyEntryStyled = styled.div`
  margin: 20px;
  padding: 15px;
  display: grid;
  grid-gap: 15px;
  justify-content: space-between;
  grid-template-columns: 1fr 2fr 2fr 1fr;
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
  box-shadow: ${(props) =>
    props.active
      ? '0 0 15px var(--highlight-blue)'
      : '4px 4px 6px rgba(8, 15, 21, 0.3)'};
  border: ${(props) => props.active && '2px solid var(--highlight-blue)'};
`

const HPCalculatorContainer = styled.div`
  grid-column: span 4;
  align-self: center;
`
