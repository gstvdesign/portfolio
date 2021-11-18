import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`

const FollowTitle = styled.h3`
  font-family: 'Work Sans', sans-serif;
  text-align: center;
  font-style: 18px;
  color: #a1e8af;
  margin-bottom: 12px;
`

const SocialContainer = styled.div`
  width: 168px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`

const FooterContainer = styled.div`
  background: linear-gradient(180deg, #F0F9F9 30.43%, #EBF2FF 100%);
  width: 100%;
  padding: 8px 0;
  color: #183F3F;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`

export default function Footer() {
  return (
    <Container>
      <FollowTitle>Follow me!</FollowTitle>
      <SocialContainer>
        <a href="https://twitter.com/gustavonering"><img src="/social/twitter.png" alt="" /></a>
        <a href="https://www.instagram.com/gustavonering/"><img src="/social/instagram.png" alt="" /></a>
        <a href="https://medium.com/@gustavonering"><img src="/social/medium.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/gustavonering/"><img src="/social/linkedin.png" alt="" /></a>
        <a href="https://www.behance.net/gstvdesign"><img src="/social/behance.png" alt="" /></a>
      </SocialContainer>
      <FooterContainer>
        <p>Code and design by Gustavo Nering © 2021</p>
      </FooterContainer>
    </Container>
  )
}