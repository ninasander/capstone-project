import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import HPCalculator from './HPCalculator'
import { ReactComponent as HeartIcon } from '../../assets/heart.svg'

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
      <h1>{initiative}</h1>
      <h2>{enemyName}</h2>
      <HPStyled>
        {currentHP}/<p>{HP}</p>
        <HeartIcon />
      </HPStyled>
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
  grid-template-columns: 1fr 2fr 2fr 2fr;
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
      ? '0 0 15px var(--dark-green)'
      : '4px 4px 6px rgba(8, 15, 21, 0.3)'};
  border: ${(props) => props.active && '2px solid var(--dark-green)'};
  h1 {
    grid-row: span 3;
    align-self: center;
  }
  h2 {
    grid-column: span 3;
    margin: 0;
    font-size: 140%;
    word-break: break-word;
    align-self: center;
  }
  p {
    margin: 0;
    align-self: center;
  }
`
const HPStyled = styled.p`
  text-align: center;
  background-image: url('heart.png');
`
