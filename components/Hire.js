import React from "react";
import styled from "styled-components";
import { Image } from "react-datocms";
import SecondaryTitle from "./SecondaryTitle";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 112px;
  @media(max-width: 800px) {
    width: 400px;
  }
`

const TitleContainer = styled.div`
  grid-column: span 4;
  grid-row: 1;
`

const Excerpt = styled.p`
  grid-column: span 3;
  grid-row: 2;
  margin-bottom: 32px;
  font-family: 'Work Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #636363;
  @media(max-width: 800px) {
    grid-column: span 4;
  }
`

const Card = styled.div`
  grid-column: span 1;
  grid-row: 3;
  padding: 16px;
  border-left: 1px solid #a1e8af;
  :last-child {
    border-right: 1px solid #a1e8af;
  }
  @media(max-width: 800px) {
    grid-column: span 4;
    grid-row: auto;
    :last-child {
    border-right: 0px;
  }
  }
`
const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
`

const CardTitle = styled.div`
  margin-bottom: 16px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  color: #aea4bf;
`

export default function Hire( props ) {
  const cardContent = props.cardContent

  return (
    <Container id="hire">
      <TitleContainer>
        <SecondaryTitle title="Why hire me?" />
      </TitleContainer>
      <Excerpt>{props.excerpt}</Excerpt>
        {cardContent.map(item => {
          const { title, explanation, image } = item

          return (
              <Card key={title}>
                <ImageContainer>
                  <Image data={image.responsiveImage} />
                </ImageContainer>
                <CardTitle>{title}</CardTitle>
                <p>{explanation}</p>
              </Card>
          )
        })}
    </Container>
  )
}