import React from "react";
import styled from "styled-components";
import { Image } from "react-datocms";
import Link from "next/link";
import Button from "./Button";

const Container = styled.div`
  color: #636363;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: 0px 0px 20px rgba(135, 135, 135, 0.2);
  border-radius: 4px;
  > div {
    margin-bottom: 16px;
  }
`
const Title = styled.h3`
  font-size: 20px;
  margin: 0;
  margin-bottom: 16px;
`
const Role = styled.p`
  margin-bottom: 12px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #183f3f;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Content = styled.p`
  font-family: 'Manuale', serif;
  font-size: 16px;
  margin: 0;
  margin-bottom: 16px;
`



export default function Card( props ) {
  return (
    <Link href={`/work/${props.url}`}>
      <a>
        <Container>
          <Role>{props.role}</Role>
          <Image data={props.imgSrc} />
          <Title>{props.title}</Title>
          <Content>
            {props.content}
          </Content>
          <Button content={'View this work'} />
        </Container>
        </a>
      </Link>
  )
}

