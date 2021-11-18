import React from "react";
import styled from "styled-components";
import { Image } from "react-datocms";
import SecondaryTitle from "./SecondaryTitle";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 100px;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Avatar = styled.div`
  flex-basis: 140px;
  img {
    border-radius: 50%;
  }
`

const Content = styled.div`
  flex-basis: 580px;
`

export default function About(props) {
  return (
    <Container>
      <SecondaryTitle title="A bit about me" />
      <ContentContainer>
        <Avatar>
          <Image data={props.avatar} />
        </Avatar>
        <Content
          dangerouslySetInnerHTML={{ __html: props.about }}
        />
      </ContentContainer>
    </Container>
  )
}