import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: #A1E8AF;
  padding: 4px 16px;
  cursor: pointer;
  font-family: 'Work Sans', sans-serif;
  color: #183F3F;
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