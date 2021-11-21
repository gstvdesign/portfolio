import React from "react";
import styled from "styled-components";
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media( max-width: 800px) {
    width: fit-content;
  }
`

export default function Layout({children}) {
  return (
    <Container>
      <TopNav />
        {children}
      <Footer />
    </Container>
  )
}