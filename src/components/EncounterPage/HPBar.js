import React from 'react'
import styled from 'styled-components/macro'

export default function HPBar({ currentHP, HP }) {
  return (
    <HPBarBorder>
      <HPBarStyled
        style={{ width: (currentHP / HP) * 100 + '%' }}
      ></HPBarStyled>
      <HPText>
        {currentHP}/{HP}
      </HPText>
    </HPBarBorder>
  )
}

const HPBarBorder = styled.div`
  position: relative;
  grid-column: span 4;
  margin: 5px;
  align-self: center;
  border: 2px solid white;
  border-radius: 5px;
`
const HPBarStyled = styled.div`
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
