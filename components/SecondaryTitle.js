import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Title = styled.h2`
  background: -webkit-linear-gradient(97.97deg,#183F3F 49.16%,#89043D 82.93%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 42px;
  font-size: 32px;
  text-align: ${props => props.theme.main};
`

Title.defaultProps = {
  theme: {
    main: 'left'
  }
}

export default function SecondaryTitle( props ) {
  const theme = {
    main: props.align
  }
  return (
    <ThemeProvider theme={theme}>
      <Title>
        { props.title }
      </Title>
    </ThemeProvider>
  )
}