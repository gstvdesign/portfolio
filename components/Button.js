import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: linear-gradient(180deg, #A1E8AF 0%, #DEF7E3 100%);
  padding: 4px 16px;
  cursor: pointer;
  font-family: 'Work Sans', sans-serif;
  color: #636363;
  font-weight: 700;
  border: 0;
  border-radius: 4px;
`

export default function Button( props ) {
  return (
    <Btn>
       { props.content }
    </Btn>
  )
}