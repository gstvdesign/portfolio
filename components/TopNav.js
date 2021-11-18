import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  background: linear-gradient(180deg, #EBF2FF 0%, #F0F9F9 100%);
  padding: 16px 0;
  width: 100%;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #183F3F;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function TopNav() {
  return (
    <Nav>
      <p>Gustavo Nering's portfolio</p>
    </Nav>
  )
}