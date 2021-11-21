import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  height: 500px;
  :hover div {
    transition: all ease-out 300ms;
    transform: rotate(15deg);
  }
  margin: 1rem;
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
  transition: all ease-out 100ms;
  :hover {
    transform: scale(1.025);
    transition: all ease-in-out 300ms;
  }
`

const Rectangle = styled.div`
  width: 380px;
  height: 135px;
  background: linear-gradient(116.9deg, #AFCBFF 24.74%, #A1E8AF 77.29%);
  border-radius: 0px 8px;
  transform: rotate(-14.99deg);
  transition: all ease-out 100ms;
  position: absolute;
  top: 277px;
  left: calc(50% - 190px);
  z-index: -1;
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