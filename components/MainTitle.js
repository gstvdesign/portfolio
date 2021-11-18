import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
`

const Title = styled.h1`
  background: -webkit-linear-gradient(105.97deg, #89043D 24.16%, #183F3F 70.93%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 48px;
  text-align: center;
  z-index: 0;
`

const Rectangle = styled.div`
  width: 380px;
  height: 135px;
  background: linear-gradient(116.9deg, #AFCBFF 24.74%, #A1E8AF 77.29%);
  border-radius: 0px 8px;
  transform: rotate(-14.99deg);
  z-index: -10;
  position: absolute;
  top: 277px;
  left: calc(50% - 190px);
`

export default function MainTitle( props ) {
  return (
    <Container>
      <Rectangle />
      <Title>
        { props.title }
      </Title>
    </Container>

  )
}