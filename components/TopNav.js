import React from "react"
import styled from "styled-components"
import Link from "next/link"

const Nav = styled.nav`
  background: linear-gradient(180deg, #EBF2FF 0%, #F0F9F9 100%);
  padding: 16px 0;
  width: 100%;
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #183F3F;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 1rem;
  }
`
export default function TopNav() {
  return (
    <Nav>
      <Link href="/#work"><a>My work</a></Link>
      <Link href="/#hire"><a>Why hire me?</a></Link>
      <Link href="/#about"><a>About me</a></Link>
    </Nav>
  )
}