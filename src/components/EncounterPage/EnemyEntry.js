import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import HPCalculator from './HPCalculator'
import shieldIcon from '../../assets/shield.svg'

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
      <p>{initiative}</p>
      <h1>{enemyName}</h1>
      <ACStyled>{armorClass}</ACStyled>
      <HPBarBorder>
        <HPBar style={{ width: (currentHP / HP) * 100 + '%' }}></HPBar>

        <HPText>
          {currentHP}/{HP}
        </HPText>
      </HPBarBorder>
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
  p {
    align-self: center;
    margin: 0;
  }
  h1 {
    grid-column: span 2;
    margin: 0;
    font-size: 1.8rem;
    word-break: break-word;
    align-self: center;
  }
`
const HPBarBorder = styled.div`
  position: relative;
  grid-column: span 4;
  margin: 5px;
  align-self: center;
  border: 2px solid white;
  border-radius: 5px;
`
const HPBar = styled.div`
  background-color: var(--dark-red);
  text-align: center;
  padding: 15px 0;
  border-radius: 2px;
  transition: width 0.5s ease-in-out;
  p {
    margin: 0;
  }
`

const HPText = styled.div`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 5px;
  text-align: center;
  top: 0;
`

const ACStyled = styled.p`
  text-align: center;
  align-self: center;
  padding: 10px 0;
  margin: 0;
  background-image: url(${shieldIcon});
  background-size: 37px;
  background-repeat: no-repeat;
  background-position: center;
`
const HPCalculatorContainer = styled.div`
  grid-column: span 4;
  align-self: center;
`
