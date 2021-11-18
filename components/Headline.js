import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  background: linear-gradient(180deg, #F0F9F9 64.9%, #EBF2FF 100%);
  padding: 36px;
  margin-bottom: 120px;
  border-radius: 8px;
  font-family: 'Manuale', serif;
  color: #89043D;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
`

export default function Headline( props ) {
  return (
    <Container>
      <p>{props.headline}</p>
    </Container>
  )

}